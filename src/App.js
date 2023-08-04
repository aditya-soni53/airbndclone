import React from 'react'
import data from "../src/data.js"
import Card from "./components/Card.js"
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"


export default function App(){
  const cards = data.map(item  =>{
    return (
      <Card 
        key={item.id}
        {...item}

       />
     )
  })
return (
  <div>
    <Navbar/>
    <Hero/>
    <section className="cards-list">
      {cards}
    </section>
  </div>
)

}