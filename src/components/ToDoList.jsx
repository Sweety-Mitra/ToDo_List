import { useState } from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ todos, addTodo, deleteTodo, editTodo, toggleComplete, completedView }) {
  // Local state for input box
  const [input, setInput] = useState("");

  // Add new todo
  const handleAdd = () => {
    addTodo(input);
    setInput(""); // clear input after adding
  };

  return (
    <>
      {/* Input box + Add button */}
      <div className="add-box">
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {/* Show filtered todos 
          - If completedView = true → show only completed tasks
          - Else → show all tasks
      */}
      {todos
        .filter((item) => (completedView ? item.completed : true))
        .map((item) => (
          <ToDoItem
            key={item.id}
            item={item}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        ))}
    </>
  );
}

export default ToDoList;
