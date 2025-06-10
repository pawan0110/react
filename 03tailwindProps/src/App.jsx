import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
     usename: "pawan",
     age : 22
    };
    

  return (
    <>
    <div className="bg-red-500  text-black p-4 rounded-xl">Hello Tailwind</div>
    <Card username="chaiaurcode" btnText="click me " />
      <Card username="hitesh" />
    </>
  )
}

export default App
