import React, { useState } from 'react'
import './styles/Sec6challenge.css';

const Challenge1 = () => {
    const [step, setstep] = useState(1);
    const [count, setcount] = useState(0);
  return (
    <div className='sec6challenge'>
      <div className="stepbox sec6cbox">
        <button className="stepboxsub sec6cbtn" onClick={()=>setstep(step--)}>---</button>
        Step : {step}
        <button className="stepboxadd sec6cbtn" onClick={()=>setcount(count--)}>+++</button>
      </div>
      <div className="countbox sec6cbox">
        <button className="countboxsub sec6cbtn">---</button>
        Count : {count}
        <button className="countboxadd sec6cbtn">+++</button>
      </div>
      <div className="msgbox sec6cbox">
        Final Value :
      </div>
    </div>
  )
}

export default Challenge1
