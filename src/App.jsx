import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";

function App() {
  // Store all todo items
  const [todos, setTodos] = useState([]);

  // Toggle between all tasks and completed tasks
  const [completedView, setCompletedView] = useState(false);

  // Add a new todo
  const addTodo = (text) => {
    if (!text.trim()) return; // ignore empty input
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  // Mark a todo as complete or incomplete
  const toggleComplete = (id) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  // Edit a todo's text
  const editTodo = (id, newText) => {
    setTodos(
      todos.map((item) =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
  };

  return (
    <div className="app-container">
      {/* Header Title */}
      <Header />

      <div className="todo-layout">
        {/* Left Side: Add + List */}
        <div className="left-section">
          <ToDoList
            todos={todos}
            addTodo={addTodo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            completedView={completedView}
          />
        </div>

        {/* Right Side: Switch Button */}
        <div className="right-section">
          <button
            className="todo-toggle-btn"
            onClick={() => setCompletedView(!completedView)}
          >
            {completedView ? "Show All" : "Completed Tasks"}
          </button>
        </div>
      </div>

      {/* Footer at bottom */}
      <Footer />
    </div>
  );
}

export default App;
