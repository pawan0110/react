import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  let [counter, setCounter] = useState(10)
   
  //let counter = 15

  const addValue = () => {
    if(counter <20) {
      // counter = counter+1;
      setCounter(counter+1)
    } else {
      console.log("counter can't go above 20");
      
    }
    
  }

  const removeValue =() => {
    if(counter > 0) {
      setCounter(counter - 1)
    } else {
      console.log("counter cna't below 0");
      
    }
  }

  return (
    <>
     <h1>chai aur react</h1>
     <h2>counter value: {counter}</h2>

     <button
     onClick={addValue}>Add value</button>
     <br/>
     <button
     onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
