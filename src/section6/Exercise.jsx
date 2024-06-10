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
    const styles = {
        parent: {
            width: '100vw',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#26355D'
        },
        child: {
            width: '300px',
            height: '250px',
            marginBottom: '50px',
            backgroundColor: '#FF8F00',
            borderRadius: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '10px',
            fontWeight: 'bold'
        },
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '50px',
            width: '1200px'
        },
        selectedchild: {
            backgroundColor: 'red',
        }
    }
    const [selected, setselected] = useState(0);
    // ============ =================
    const handleclick = (id)=>{
        if(id === selected){
            setselected(null);
        }else{
            setselected(id);
        }
    }

  return (
    <div style={styles.parent}>
    <div style={styles.container}>
      {
        data.map(a=>{
            return(
                <div key={a.id} onClick={()=>{handleclick(a.id)}} style={{
                    ...styles.child,
                    ...(a.id === selected && styles.selectedchild)            // this is important part
                }}>
                    { a.id===selected ? a.answer : a.question}
                </div>
            )
        })
      }
    </div>
    </div>
  )
}

export default Exercise
