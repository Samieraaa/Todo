import { useState } from "react";

export default function AddTodo() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (task) {
      setTodos((todos) => [...todos, task]);
      setTask("");
    }
  }

  return (
    <div>
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
    </div>
  );
}
