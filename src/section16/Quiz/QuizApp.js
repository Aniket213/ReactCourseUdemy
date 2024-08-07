import React, { useEffect, useReducer } from 'react'
import './index.css'
import Header from './Header'
import Main from './Main'
import Loader from './Loader'
import Error from './Error'
import StartScreen from './StartScreen'
import Question from './Question'
import NextButton from './NextButton'
import Progress from '../Progress'
import FinishScreen from './FinishScreen'

const initialstate={
  questions: [],
  // loading, error, ready, active, finished
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
};

const reducer = (state, action)=>{
  switch(action.type){
    case 'datareceived':
      return {...state, questions: action.payload, status: 'ready'};
    case 'datafailed':
      return {...state, status: 'error'};
    case 'start':
      return {...state, status: 'active'};
    case 'newAnswer':
      const question = state.questions.at(state.index);
      return {...state, 
        answer: action.payload, 
        points: action.payload === question.correctOption
          ? state.points + question.points
          : state.points,};
    case 'nextQuestion':
      return {...state, index: state.index+1, answer: null};
    case 'finish':
      return{...state, status: 'finished', highscore: state.points>state.highscore?state.points:state.highscore}
    default:
      throw new Error("Action Unknown");
  }
}

// ========== function ==============
export default function QuizApp() {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const { questions , status, index, answer, points, highscore } = state;
  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((prev, curr)=>prev+curr.points, 0);

  useEffect(()=>{
    fetch("http://localhost:9000/questions")
    .then((res)=> res.json())
    .then((data)=> dispatch({type: 'datareceived', payload: data}))
    .catch((err)=> dispatch({type: 'datafailed'}))
  }, []);

  return (
    <div className='app'>
      <Header/>
      <Main>
        {status ==='loading' && <Loader/>}
        {status === 'error' && <Error/>}
        {status === 'ready' && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
        {status === 'active' &&
        <> 
          <Progress index={index} numQuestions={numQuestions} points={points}  maxPossiblePoints={maxPossiblePoints} answer={answer}/>
          <Question question={questions[index]} dispatch={dispatch} answer={answer} />
          <NextButton dispatch={dispatch} answer={answer} index={index} numQuestions={numQuestions} />
        </>}
        {status === 'finished' && <FinishScreen points={points} maxPossiblePoints={maxPossiblePoints} highscore={highscore} />}
      </Main>
    </div>
  )
}
