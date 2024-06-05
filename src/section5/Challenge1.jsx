import React from 'react'
import './styles/Challenge1.css'

const Challenge1 = () => {
    const data = [
        {
            name: "HTML+CSS 😁",
            color: "blue",
        },
        {
            name: "Javascript 👌",
            color: "yellow",
        },
        {
            name: "Web Design ❤️",
            color: "lightgreen",
        },
        {
            name: "Git and Github 👍",
            color: "red",
        },
        {
            name: "React ✌️",
            color: "lightblue",
        },
        {
            name: "Svelte 🤦‍♂️",
            color: "red",
        },
    ];
  return (
    <div className='challenge1'>
        {/* image box */}
      <div className="imgboxoverlay">
        <div className="imgbox"></div>
      </div>
        {/* Main Body */}
      <div className="body">
        <h1>Aniket Mittal</h1>
        <p>Lorem ipsum dolor sit amet, psum, voluptatum atque sapiente illo quas sed impedit sint rem harum. Quibusdam hic, quos modi eos tenetur voluptatibus similique ab, quo quae exercitationem doloribus architecto earum officia blanditiis.</p>
        <div className="skills">
            {
                data.map(a=>{
                    return(
                        <Skill name={a.name} color={a.color} key={a.name} />
                    )
                })
            }
        </div>
      </div>

    </div>
  )
}
export default Challenge1

const Skill = ({name, color})=>{
    return(
        <div className="skill" style={{backgroundColor: color}}>
            {name}
        </div>
    )
}