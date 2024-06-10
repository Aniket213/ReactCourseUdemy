import React, { useState } from 'react'

const Exercise1 = () => {
    const [data, setdata] = useState([
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
            display: 'none',
        },
        visible: {
            display: 'block',
        }
    };

    const toggleactive = (index) =>{
        const newdata = data;
        newdata[index].isactive = !newdata[index].isactive; 
        setdata(newdata);
    }
  return (
    <div>
      {
        data.map((a, index)=>{
            return(
                <div key={a.title}>  <br />
                    <div style={styles.title} onClick={()=>{toggleactive(index)}}>
                        {a.title}
                    </div>
                    <div style={{ ...styles.desc, ...(a.isactive && styles.visible) }}>
                        {a.desc}
                    </div>
                </div>
            )
        })
      }
    </div>
  )
}

export default Exercise1
