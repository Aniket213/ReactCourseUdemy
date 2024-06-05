import React, { useState } from 'react'
import './styles/Sec6challenge.css';

const Challenge1 = () => {
    const [step, setstep] = useState(1);
    const [count, setcount] = useState(0);
    const [date, setDate] = useState(new Date());
    const addDay = () => {
        setDate(a => {
          const newDate = new Date(a);
          newDate.setDate(newDate.getDate() + 1);
          return newDate;
        });
      };
      const addtodate = ()=>{

      }
      
  return (
    <div className='sec6challenge'>
      <div className="stepbox sec6cbox">
        <button className="stepboxsub sec6cbtn" onClick={()=>setstep(a=>a-1)}>---</button>
        Step : {step}
        <button className="stepboxadd sec6cbtn" onClick={()=>setstep(a=>a+1)}>+++</button>
      </div>
      <div className="countbox sec6cbox">
        <button className="countboxsub sec6cbtn" onClick={addtodate} onClick={()=>setcount(a=>a-step)}>---</button>
        Count : {count}
        <button className="countboxadd sec6cbtn" onClick={removefromdate} onClick={()=>setcount(a=>a+step)}>+++</button>
      </div>
      <div className="msgbox sec6cbox">
        Final Value :
      </div>
    </div>
  )
}

export default Challenge1
