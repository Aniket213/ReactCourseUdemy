import React, {useReducer} from 'react'
import Button from '@mui/material/Button'

const UseReducerhook = () => {
    const initialstate = 0;
    const reducer = (state, action)=>{
        switch(action.type){
            case 'increment':
                return state + action.payload;
            case 'decrement':
                return state - action.payload;
            case 'reset':
                return action.payload;
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialstate);

  return (
    <div style={{display: 'flex', gap: '20px'}}>
      <Button variant="contained" color="primary" onClick={()=>{dispatch({type: 'increment', payload: 1})}}>Increment</Button>
      <Button variant="contained" color="secondary" onClick={()=>{dispatch({type: 'decrement', payload: 1})}}>Decrement</Button>
      <Button variant="contained" color="error" onClick={()=>{dispatch({type: 'reset', payload: initialstate})}}>Reset</Button>
      <Button variant='text' color='primary'>{state}</Button>
    </div>
  )
}

export default UseReducerhook
