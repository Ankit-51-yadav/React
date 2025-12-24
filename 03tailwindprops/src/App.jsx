import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card.jsx'

function App() {

  let myObj = {
    username: "Ankit",
    age: 22,
    city: "New Delhi"
  }
  

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-3xl  mb-6'>Tailwind test</h1>
      <Card  channel="Chaiaurcode" someObj={myObj} btnText ="Subscribe" />
      <Card  channel="Ankit"/>
    </>
  )
}

export default App