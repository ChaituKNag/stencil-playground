import React from "react";
import "./App.css";

function App() {
  const todos = [
    { id: 2, title: "dummy", done: false },
    { id: 3, title: "dummy 2", done: false }
  ];
  const todoAppRef = React.useRef();
  React.useEffect(() => {
    todoAppRef.current.todos = todos;
  }, [todos]);
  return (
    <div className="App">
      <todo-app ref={todoAppRef}>
        <h3 slot="todo-app-title">Todo APP</h3>
        <h4 slot="todo-app-list-title">All todos:</h4>
      </todo-app>
    </div>
  );
}

export default App;
