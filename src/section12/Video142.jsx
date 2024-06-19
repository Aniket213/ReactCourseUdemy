import React, { useEffect, useState } from 'react'
const mykey = "f84fc31d";
const Video142 = () => {
    const [movies, setmovies] = useState([]);
    const [loading, setloading] = useState(false);

    useEffect(()=>{
        const fetchdata = async ()=>{
            setloading(true);
            const res = await fetch(`http://www.omdbapi.com/?apikey=${mykey}&s=interstellar`);
            const data = await res.json();
            setmovies(data.Search);
            console.log(data.Search);
            setloading(false);
        }
        fetchdata();
    }, []);

  return (
    <div>
      {
        !loading ? 
        (
            movies && movies.map((a, i)=>{
                return(
                    <div key={i}>
                        <p>{a.Title}</p>
                    </div>
                )
            })
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