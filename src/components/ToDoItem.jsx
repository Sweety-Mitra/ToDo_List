import { useState } from "react";

function ToDoItem({ item, deleteTodo, editTodo, toggleComplete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(item.text);

  const saveEdit = () => {
    editTodo(item.id, editText);
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${item.completed ? "completed" : ""}`}>

      {/* Checkbox to mark complete */}
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => toggleComplete(item.id)}
        style={{ marginRight: "10px" }}
      />

      {/* Editing mode */}
      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          style={{ flex: 1, marginRight: "10px" }}
        />
      ) : (
        <span style={{ flex: 1 }}>{item.text}</span>
      )}

      {/* Edit / Save */}
      {isEditing ? (
        <button onClick={saveEdit}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
      )}

      {/* Delete */}
      <button onClick={() => deleteTodo(item.id)}>Delete</button>
    </div>
  );
}

export default ToDoItem;
