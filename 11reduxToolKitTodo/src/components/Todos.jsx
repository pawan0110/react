import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo, updateTodo } from '../features/todoSlice'

function Todos() {
  const todos = useSelector(state => state.todo.todos) || []
  const dispatch = useDispatch()

  const [editingId, setEditingId] = useState(null)
  const [editText, setEditText] = useState("")

  const handleEdit = (todo) => {
    setEditingId(todo.id)
    setEditText(todo.text)
  }

  const handleSave = (id) => {
    if (editText.trim() === "") return
    dispatch(updateTodo({ id, text: editText }))
    setEditingId(null)
  }

  const handleCancel = () => {
    setEditingId(null)
  }

  return (
    <>
      <div className="text-xl font-bold mb-4">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editingId === todo.id ? (
              <div className="flex gap-2 w-full items-center">
                <input
                  className="flex-1 px-2 py-1 rounded text-black"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSave(todo.id)
                    if (e.key === "Escape") handleCancel()
                  }}
                  autoFocus
                />
                <button
                  className="bg-green-500 px-2 py-1 rounded text-white"
                  onClick={() => handleSave(todo.id)}
                >
                  Save
                </button>
                <button
                  className="bg-gray-500 px-2 py-1 rounded text-white"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex justify-between items-center w-full">
                <div className="text-white">{todo.text}</div>
                <div className="flex gap-2">
                  {/* Edit Button */}
                  <button
                    onClick={() => handleEdit(todo)}
                    className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md"
                  >
                    ✏️
                  </button>
                  {/* Delete Button */}
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todos
