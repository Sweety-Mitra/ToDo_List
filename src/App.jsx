import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import Footer from "./components/Footer";

function App() {
  const [ todos, setTodos ] = useState( [] );
  const [ completedView, setCompletedView ] = useState( false );

  const addTodo = ( text ) => {
    if ( !text.trim() ) return;
    setTodos( [ ...todos, { id: Date.now(), text, completed: false } ] );
  };

  const toggleComplete = ( id ) => {
    setTodos(
      todos.map( ( item ) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const deleteTodo = ( id ) => {
    setTodos( todos.filter( ( item ) => item.id !== id ) );
  };

  const editTodo = ( id, newText ) => {
    setTodos(
      todos.map( ( item ) =>
        item.id === id ? { ...item, text: newText } : item
      )
    );
  };

  return (
    <div className="app-container">
      <Header />

      <div className="todo-layout">
        {/* LEFT */ }
        <div className="left-section">
          <ToDoList
            todos={ todos }
            addTodo={ addTodo }
            toggleComplete={ toggleComplete }
            deleteTodo={ deleteTodo }
            editTodo={ editTodo }
            completedView={ completedView }
          />
        </div>

        {/* RIGHT */ }
        <div className="right-section">
          <button
            className="todo-toggle-btn"
            onClick={ () => setCompletedView( !completedView ) }
          >
            { completedView ? "Show All" : "Completed Tasks" }
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
