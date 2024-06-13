import React, { useState } from 'react'

const Challenge = ({children, shorttextlenght=10, buttonshowmore='default more', buttonshowless='default less', color='red', boxstyle={border:'2px solid red'}}) => {
    const [toggleshow, settoggleshow] = useState(false);
    const handletoggle = ()=>{
        settoggleshow(prev=>!prev);
    }
    const styles = {
        button: {
            cursor: 'pointer',
            color: color,
        },
        boxstyle: boxstyle,
    }

  return (
    <div style={styles.boxstyle}>
        {
            toggleshow ? (
                <div>
                    {children} 
                    <span style={styles.button} onClick={handletoggle}>... {buttonshowless}</span>
                </div>
            ) : (
                <div>
                    {children.slice(0, shorttextlenght)}
                    <span style={styles.button} onClick={handletoggle}>... {buttonshowmore}</span>
                </div>
            )
        }
    </div>
  )
}

export default Challenge
