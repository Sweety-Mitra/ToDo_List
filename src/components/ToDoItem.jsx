import { useState } from "react";

function ToDoItem({ item, deleteTodo, editTodo, toggleComplete }) {
  // Track whether the item is being edited
  const [isEditing, setIsEditing] = useState(false);

  // Local state for the edited text
  const [editText, setEditText] = useState(item.text);

  // Save updated text and exit editing mode
  const saveEdit = () => {
    editTodo(item.id, editText);
    setIsEditing(false);
  };

  return (
    // Apply "completed" class if checkbox is checked
    <div className={`todo-item ${item.completed ? "completed" : ""}`}>

      {/* Checkbox to mark complete */}
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => toggleComplete(item.id)}
        style={{ marginRight: "10px" }}
      />

      {/* If editing → show input box | Else → show text */}
      {isEditing ? (
        <input
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          style={{ flex: 1, marginRight: "10px" }}
        />
      ) : (
        <span style={{ flex: 1 }}>{item.text}</span>
      )}

      {/* Edit / Save + Delete buttons */}
      <div className="todo-actions">

        {/* Show Save button only when editing */}
        {isEditing ? (
          <button className="save-btn" onClick={saveEdit}>Save</button>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}

        {/* Delete button */}
        <button onClick={() => deleteTodo(item.id)}>Delete</button>
      </div>
    </div>
  );
}

export default ToDoItem;
