import React, {useState} from "react";

import { useTodo } from "./todocontext";

function TodoForm() {
   const [todo, setTodo] = useState("")
   const {addTodo} = useTodo()

   const add = (e) => {
    e.preventDefault()

    if(!todo) return 

    addTodo({todo, completed:false})
    setTodo("")
   }
}