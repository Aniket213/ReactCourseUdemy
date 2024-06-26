import React, { useState, useEffect } from 'react'

const Video158 = () => {
    const [firstcurr, setfirstcurr] = useState("INR");
    const [secondcurr, setsecondcurr] = useState("USD");
    const [money, setmoney] = useState(1);
    const [output, setoutput] = useState(0);
    const [isloading, setisloading] = useState(false);

    useEffect(()=>{
        const func = async ()=>{
            try{
                setisloading(true);
                const res = await fetch(`https://api.frankfurter.app/latest?amount=${money}&from=${firstcurr}&to=${secondcurr}`);
                const data = await res.json();
                setoutput(data.rates[secondcurr]);
                console.log(data.rates[secondcurr]);
            }
            catch(err){
                console.log(err);
            }
            finally{
                setisloading(false);
            }
        }
        if(firstcurr === secondcurr){
            setoutput(money);
            return;
        }
        func();
    }, [firstcurr, secondcurr, money]);

  return (
    <div>
      <input type='number' value={money} onChange={e=>setmoney(e.target.value)}/>
      <select value={firstcurr} onChange={e=>setfirstcurr(e.target.value)}>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
      </select>
      <select value={secondcurr} onChange={e=>setsecondcurr(e.target.value)}>
        <option value="INR">INR</option>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
      </select>
      <div>
        <h1>Output</h1>
        {
            isloading ? (
                <div>Loading ...</div>
            ) : (
                <div>{output}</div>
            )
        }
      </div>
    </div>
  )
}

export default Video158
