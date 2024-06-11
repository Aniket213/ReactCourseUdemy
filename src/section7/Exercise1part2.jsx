import React, { useState } from 'react'

const Exercise1part2 = () => {
    const [data, setdata] = useState([
        {
            title: "1. Lorem ipsum dolor sit amet",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quidem corporis nulla itaque. Inventore, impedit!",
        },{
            title: "2. Lorem ipsum dolor sit amet",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quidem corporis nulla itaque. Inventore, impedit!",
        },{
            title: "3. Lorem ipsum dolor sit amet",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quidem corporis nulla itaque. Inventore, impedit!",
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
    
    const [isactive, setisactive] = useState(null);
    const toggleactive = (index) =>{
        isactive === index ? setisactive(null) : setisactive(index);
    };

  return (
    <div> <br /><br />
        <h1>Second Accordian</h1> <p>(Ony one accordian open at a time)</p>
      {
        data.map((a, index)=>{
            return(
                <div key={a.title}>  <br />
                    <div style={styles.title} onClick={()=>{toggleactive(index)}}>
                        {a.title}
                    </div>
                    { (isactive === index) &&
                        (
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

export default Exercise1part2
