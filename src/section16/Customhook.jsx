import React, { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setdata] = useState(null);
    useEffect(()=>{
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setdata(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    },[url])
    return {data, setdata};
};

const Customhook = () => {
    const {data, setdata}=useFetch("https://jsonplaceholder.typicode.com/todos");

    const updatethetodo = (key)=>{
        console.log("heres the id u clicked : ", key);
        setdata(prevData => {
            return prevData.map(
                item => item.id===key?{ ...item, title: "Hi" }:item
            );
        });
    };

  return (
    <>
     {
      data && data.map((item) => {
        return(
            <>
                <p>{item.id}</p>
                <p key={item.id}>{item.title}</p>
                <button onClick={() => updatethetodo(item.id)}>Click Me</button>
            </>
          )
      })
     }
    </>
  );
};

export default Customhook;
