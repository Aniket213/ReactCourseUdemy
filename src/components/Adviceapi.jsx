// 
import React, { useEffect, useState } from 'react'

const Adviceapi = () => {
    const [advice, setadvice]= useState("");
    const [count, setcount] = useState(0);

    const advicefunc = async ()=>{
        const res = await fetch('https://api.adviceslip.com/advice');
        const data = await res.json();
        setadvice(data.slip.advice);
        setcount((c) => c+1);

    }
    useEffect(() => {
     advicefunc()
    }, [])
    
  return (
    <div>
      <h1>I am giving u a free advice ...</h1>
      <button onClick={advicefunc}>Click Me</button>
      <p>{advice}</p>
      <Message count = {count}/>
      
    </div>
  )
}
export default Adviceapi

const Message = (props)=>{
    return(
        <p>You have read {props.count} pieces of advice.</p>
    )
}




