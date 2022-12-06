import React from 'react'
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../Actions/action'

export const Task = ({todo}) => {
    const dispatch = useDispatch();
  return (
    <div>
        <p className="task" style={{ textDecoration: todo.completed ? "line-through" : "" }}>{todo.task}</p>
              <button onClick={() => dispatch(removeTodo(todo.id))}>
                Remove
              </button> 
              <button onClick={() => dispatch(toggleTodo(todo.id))}> done</button>
    </div>
  )
}
