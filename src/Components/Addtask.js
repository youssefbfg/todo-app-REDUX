import React from 'react'
import  {useState} from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from '../Actions/action';

export const Addtask = () => {
    const [counter, setCouter] = useState(0);
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const addtask = () => {
    if (todo !== "") {
      dispatch(addTodo(counter, todo));
      setCouter(counter + 1);
      setTodo("");
    }
  };
  return (
    <div className="todo">
    <input
    placeholder='Enter Your Task'
      type="text"
      value={todo}
      onChange={(e) => setTodo(e.target.value)}
    />
    <button onClick={addtask}>Add todo</button>
  </div>
  )
}
