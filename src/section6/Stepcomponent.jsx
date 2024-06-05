import React, { useState } from 'react'
import './styles/Sec6style.css'

const Stepcomponent = () => {
    const data = [
        {
            title: "Make Plan ...",
        },
        {
            title: "Work Hard ...",
        },
        {
            title: "Enjoy Results ...",
        },
    ];
    const [step, setstep] = useState(0);
    const [isopen, setisopen] = useState(true);
  return (
    <div>
        <button className="stepsbtn" onClick={()=>{setisopen(!isopen)}}>Display</button>
        {
            isopen &&
            <div className='steps'>
            <div className="numbers">
                <div className={`number ${step>=0 ? 'isactive' : ''}`} onClick={()=>{setstep(0)}}>1</div>
                <div className={`number ${step>=1 ? 'isactive' : ''}`} onClick={()=>{setstep(1)}}>2</div>
                <div className={`number ${step>=2 ? 'isactive' : ''}`} onClick={()=>{setstep(2)}}>3</div>
            </div>
            <p className='msg'>
                Step {step}: &nbsp;
                {(step>=0 && step<=2) ? data[step].title : "please select a valid value ..."}
            </p>
            <div className="buttons">
                <button className="prevbtn stepsbtn" onClick={()=>{setstep(a=>a-1)}}>Previous</button>
                <button className="nextbtn stepsbtn" onClick={()=>{setstep(a=>a+1)}}>Next</button>
            </div>
            </div>
        }
    </div>
  )
}

export default Stepcomponent

