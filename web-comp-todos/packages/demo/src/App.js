import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <todo-app
        todos={[
          { id: 2, title: "dummy", done: false },
          { id: 3, title: "dummy 2", done: false }
        ]}
      >
        <h3 slot="todo-app-title">Todo APP</h3>
        <h4 slot="todo-app-list-title">All todos:</h4>
      </todo-app>
    </div>
  );
}

export default App;
