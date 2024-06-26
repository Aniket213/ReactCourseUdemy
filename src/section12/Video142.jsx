import React, { useEffect, useState } from 'react'

const Video142 = () => {
    const [movies, setmovies] = useState();
    const [loading, setloading] = useState(false);

    useEffect(()=>{   // fetching data in useeffect hook
        const fetchdata = async ()=>{  // create a separate function inside callback function in useeffect hook
          try{      // perform error handling 
            setloading(true); // adding loading state 
            const res = await fetch(`https://api.adviceslip.com/advice`);
            const data = await res.json();
            setmovies(data.slip.advice);
            console.log(data.slip.advice);
          }
          catch(err){
            console.log(err);
          }  
          finally{
            setloading(false);
          }
        }
        fetchdata();   // call the function inside the useeffect 
    }, []);

  return (
    <div>
      {
        !loading ? 
        (
                    <div>
                        <p>{movies}</p>
                    </div>
        )
        :
        (
            <div> Loading ...</div>
        )
      }
    </div>
  )
}

export default Video142