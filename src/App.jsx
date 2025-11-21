import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="app-container">
      <Header />
      <div className="left-section">
        <ToDoList 
          todos={todos} 
          addTodo={addTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  );
}

export default App;
