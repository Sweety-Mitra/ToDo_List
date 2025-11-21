import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text }]);
  };

  return (
    <div className="app-container">
      <Header />
      
      <div className="left-section">
        <ToDoList todos={todos} addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;
