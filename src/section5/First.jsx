import React from 'react'
import { pizzaData } from '../temp/data'
import '../temp/index.css'

export const First = () => {
  // const pizzaData  = [];
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

const Main = ({data})=>{
  return(
    <main className='menu'>
      <h2>Our Menu</h2>
      <ul className='pizzas'>
      {data.length>0 ? 
        (data.map(a=>{
          return( 
            <Pizza data={a} key={a.name}/>
          )
        })) :
        <p>We are still working on our Menu. Please come back later :)</p>
      }
      </ul>
    </main>
  )
}

const Footer = ()=>{
  const currenthour = new Date().getHours();
  const open = 9; const close = 22;
  const isOpen = currenthour>=open && currenthour<=close;
  return(
    <footer className='footer'>
      { isOpen ?
        (<div className='order'>
          <p>We're open until {close}:00. Come visit us or order online</p>
          <button className='btn'>Order</button>
        </div>) :
        <p>We are happy to Welcome you between {open}:00 and {close}:00.</p>
      }
    </footer>
  )
}

const Pizza = ({data})=>{
    return(
      <div className={`pizza ${data.soldOut ? 'sold-out' : ''}`}>
        <img src={data.photoName} alt={data.name} />
        <div>
          <h3>{data.name}</h3>
          <p>{data.ingredients}</p>
          <span>{data.soldOut ? "Sold Out" : data.price}</span>
        </div>  
      </div>
    )
}











