import { useState } from "react";

export default function AddItem() {
  const [todos, setTodos] = useState([]);

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
    <div>
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
  );
}
