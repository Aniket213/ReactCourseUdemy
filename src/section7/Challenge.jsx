import React, { useState } from 'react'

const Challenge = () => {
    const [bill, setbill] = useState(0);
    const [mytip, setmytip] = useState(0);
    const [myfriendtip, setmyfriendtip] = useState(0);
  return (
    <div>
      <div>
        BILL - <input type="number" value={bill} onChange={e=>setbill(parseInt(e.target.value))}/>
      </div>
      <div>
        MyTip - 
        <select value={mytip} onChange={e=>setmytip(parseInt(e.target.value))}>
            <option value="0">Dissatisfied (0%)</option>
            <option value="5">It was Okay (5%)</option>
            <option value="10">It was Good (10%)</option>
            <option value="20">Absolutely Amazing (20%)</option>
        </select>
      </div>
      <div>
        My Friends Tip - 
        <select value={myfriendtip} onChange={e=>setmyfriendtip(parseInt(e.target.value))}>
            <option value="0">Dissatisfied (0%)</option>
            <option value="5">It was Okay (5%)</option>
            <option value="10">It was Good (10%)</option>
            <option value="20">Absolutely Amazing (20%)</option>
        </select>
      </div>
      <div>
        You Pay : ${bill+((mytip+myfriendtip)/2)} ( ${bill} + ${(mytip+myfriendtip)/2} )
      </div>
      <div>
        <h3 onClick={()=>{setbill(0); setmytip(0); setmyfriendtip(0);}} >Reset</h3>
      </div>
    </div>
  )
}

export default Challenge
