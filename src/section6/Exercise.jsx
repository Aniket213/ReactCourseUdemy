import React, { useState } from 'react'

const Exercise = () => {
    const data = [
        {
          id: 1,
          question: "What is the capital of France?",
          answer: "Paris"
        },
        {
          id: 2,
          question: "Who wrote 'To Kill a Mockingbird'?",
          answer: "Harper Lee"
        },
        {
          id: 3,
          question: "What is the chemical symbol for water?",
          answer: "H2O"
        },
        {
          id: 4,
          question: "What is the tallest mountain in the world?",
          answer: "Mount Everest"
        },
        {
          id: 5,
          question: "What year did the Titanic sink?",
          answer: "1912"
        },
        {
          id: 6,
          question: "What is the largest planet in our solar system?",
          answer: "Jupiter"
        },
        {
          id: 7,
          question: "Who painted the Mona Lisa?",
          answer: "Leonardo da Vinci"
        },
        {
          id: 8,
          question: "What is the capital of Japan?",
          answer: "Tokyo"
        },
        {
          id: 9,
          question: "What is the powerhouse of the cell?",
          answer: "Mitochondria"
        },
        {
          id: 10,
          question: "Who is known as the 'Father of Computers'?",
          answer: "Charles Babbage"
        }
      ];

    const [selected, setselected] = useState(0);
    // const handlechange = (id)=>{
    //     setselected(id===selected?null:id);
    // }
  return (
    <div>
      {
        data.map(a=>{
            return(
                <div key={a.id} onClick={setselected(a.id)}>
                    { a.id==selected ? a.answer : a.question}
                </div>
            )
        })
      }
    </div>
  )
}

export default Exercise
