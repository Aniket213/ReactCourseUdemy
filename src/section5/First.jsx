import React from 'react'
import { pizzaData } from '../temp/data'
import '../temp/index.css'

export const First = () => {
  return (
    <div className='container'>
      <Header/>
      <Main data = {pizzaData}/>
      <Footer/>
    </div>
  )
}

const Header = ()=>{
  return(
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  )
}

const Main = (props)=>{
  return(
    <main className='menu'>
      <h2>Our Menu</h2>
      {
        props.data.map(a=>{
          return(
            <Pizza data={a}/>
          )
        })
      }
    </main>
  )
}

const Footer = ()=>{
  return(
    <footer className='footer'>
      { new Date().toLocaleTimeString() } We are currently open ...
    </footer>
  )
}

const Pizza = (props)=>{
    return(
      <div className='pizza'>
        <img src={props.data.photoName} alt={props.data.name} />
        <div>
          <h3>{props.data.name}</h3>
          <p>{props.data.ingredients}</p>
          <span>{props.data.price}</span>
        </div>  
      </div>
    )
}











