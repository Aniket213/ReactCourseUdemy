import React, { useState } from 'react'

const Exercise1 = () => {
    const [data, setdata] = useState([        // creating it usestate variable is important because without it the re-render will not occur
        {
            title: "1. Lorem ipsum dolor sit amet",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quidem corporis nulla itaque. Inventore, impedit!",
            isactive: false
        },{
            title: "2. Lorem ipsum dolor sit amet",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quidem corporis nulla itaque. Inventore, impedit!",
            isactive: false
        },{
            title: "3. Lorem ipsum dolor sit amet",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quidem corporis nulla itaque. Inventore, impedit!",
            isactive: false
        },
    ]);

    const styles = {
        title: {
            backgroundColor: 'lightgreen',
            cursor: 'pointer',
        },
        desc: {
            backgroundColor: 'lightblue',
        }
    };

    // const toggleactive = (index) =>{
    //     // const newdata = data.map((a, i)=>{
    //     //     if(i === index){
    //     //         return({...a, isactive:!a.isactive});
    //     //     };
    //     //     return a;
    //     // })
    //     // setdata(newdata);
    //     const newdata = [...data];  // always use spread operator, do not directly assign the value like: const newdata=data;
    //     newdata[index].isactive = !newdata[index].isactive;
    //     setdata(newdata);
    // };

  return (
    <div>
      {
        data.map((a, index)=>{
            return(
                <div key={a.title}>  <br />
                    <div style={styles.title} onClick={()=>{setdata(prev=>prev.map((a, i)=>i===index?{...a, isactive: !a.isactive}:a))}}>
                        {a.title}
                    </div>
                    {
                        a.isactive && (
                        <div style={styles.desc}>
                            {a.desc}
                        </div>
                        )
                    }
                </div>
            )
        })
      }
    </div>
  )
}

export default Exercise1
