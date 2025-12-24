import { useState } from 'react'
import './App.css'

function App() {

 let [counter, setCounter] =  useState(0)
  
  //let counter = 15;

  const addValue = () => {
    if (counter <20){
    counter = counter + 1;
   setCounter(counter);
    }
    console.log("clicked", counter);
  }


  const removeValue = () =>{
    if (counter > 0) {
      counter = counter - 1;
      setCounter (counter);
      console.log("clicked", counter);
    }
  }
  return (
    <>
      <h1>Counter app</h1>
      <h2>Started on day 2</h2>
      <h3>counter value:{counter}</h3>
      <button
        onClick={addValue}
      >Add value</button>
      <br/>

      <button
        onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
