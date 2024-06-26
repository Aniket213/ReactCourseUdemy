import React, { useEffect } from "react";

const Keyboard = () => {
    useEffect(()=>{
        const func = (e)=>{
            if(e.code === 'Escape'){
                const element = document.getElementsByClassName("parentbox");
                console.log("Yay ........")
                element[0].style.color === 'gray' ? console.log("its gray") : console.log("its not gray");
                element[0].style.color === 'gray' ? element[0].style.color = 'blue' : element[0].style.color = 'gray';
            }
        }
        document.addEventListener('keydown', func);
        return ()=>{
            document.removeEventListener('keydown', func);
        }
    }, []);
  return (
    <div
      style={{
        fontSize: "20px",
        textAlign: "justify",
        border: "none",
        borderRadius: "20px",
        margin: "100px auto",
        width: "500px",
        height: "auto",
        backgroundColor: "#f1f1f1",
        boxShadow: "0 0 7px rgba(0, 0, 0, 0.2)",
        padding: "30px",
        color: "gray",
      }}
      className="parentbox"
    >
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
        voluptates dolorum tenetur veniam, provident culpa illo ipsam cupiditate
        placeat porro esse, hi my name is Aniket and I am a full stack software
        developer trainee at Shaurya Software Pvt. Ltd. hic atque beatae sunt
        repudiandae nostrum voluptatem. Aspernatur suscipit, officiis quas
        asperiores rerum debitis, quo laudantium in exercitationem ab placeat
        minima consectetur. Iusto consequuntur, voluptatum eligendi neque eaque
        explicabo!
      </p>
    </div>
  );
};

export default Keyboard;
