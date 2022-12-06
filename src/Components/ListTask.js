import React from 'react'
import { useSelector } from 'react-redux'
import { Task} from './Task'
export const ListTask = () => {
    const todos = useSelector((state) => state.todos);
  return (
    <div className="todos">
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id}>
              <Task todo={todo} />
            </li>
          ))}
        </ul>
      </div>
  )
}
