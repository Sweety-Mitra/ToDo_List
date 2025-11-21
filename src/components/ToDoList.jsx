import { useState } from "react";

function ToDoList({ todos, addTodo }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    addTodo(input);
    setInput("");
  };

  return (
    <>
      {/* Input Box */}
      <div className="add-box">
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {/* Simple List */}
      {todos.map((item) => (
        <div key={item.id} className="todo-item">
          {item.text}
        </div>
      ))}
    </>
  );
}

export default ToDoList;
