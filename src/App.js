import React, { useState } from "react";
import "../src/assets/App.css";

export default function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (task) {
      setTodos((todos) => [...todos, task]);
      setTask("");
    }
  }
  const handleRemove = (index) => {
    setTodos((oldVals) => {
      return oldVals.filter((_, i) => i !== index);
    });
  };

  const handleEdit = (index, newValue) => {
    const newTasks = [...todos];
    newTasks[index] = newValue;
    setTodos(newTasks);
  };

  return (
    <div className="App">
      <div className="Container">
        <h1>Todo List App</h1>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button className="todoBtn" type="submit">
            Add
          </button>
        </form>

        <ul className="allTodos">
          {todos.map((todo, index) => (
            <li className="singleTodo" key={index}>
              <span className="todoText">{todo}</span>
              <button
                className="editBtn"
                onClick={() => handleEdit(index, prompt("Edit task", todo))}
              >
                Edit
              </button>
              <button className="delBtn" onClick={() => handleRemove(index)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
