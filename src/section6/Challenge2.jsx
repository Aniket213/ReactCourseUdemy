import React, { useState } from 'react'

const Challenge2 = () => {
    const [step, setstep] = useState(1);
    const [count, setcount] = useState(0);
    const date = new Date("June 9 2024");
    date.setDate(date.getDate() + count);
    
  return (
    <div>
      <div>
        <input type="range" min={0} max={10} value={step} onChange={e=>{setstep(parseInt(e.target.value))}}/>
        {step}
      </div>
      <div>
        <button onClick={()=>{setcount(prev=>prev-step)}}>---</button>
        <input type="number" value={count} onChange={e=>{setcount(parseInt(e.target.value))}}/> {count}
        <button onClick={()=>{setcount(prev=>prev+step)}}>+++</button>
      </div>
      <div> Current Date: June 9 2024</div>
      {count>0 ? (<div>{count} days from now are {date.toDateString()}</div>) : (<div>{-1*count} days before tody are {date.toDateString()}</div>)}
      <button onClick={()=>{setcount(0); setstep(1);}}>Reset</button>
    </div>
  )
}

export default Challenge2
