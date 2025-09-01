import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() { 

  return (
    <>
      <p>Learn about redux toolkit</p>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
