import React, { useState } from "react";
// *Components
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import EventList from "./components/EventList";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodos = (newTodo) => {
    console.log(newTodo);
    setTodos((prev) => {
      return [...prev, newTodo];
    });
  };
  //! Select
  const selectedFunc = (id) => {
    setTodos((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, selected: !item.selected };
        } else {
          return item
        }
      });
    });
  };
  console.log(todos);
  //! Delete
  const deleteItem = (id) => {
    setTodos((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  };
  return (
    <div className="App">
      <Header />
      <Form addTodos={addTodos} />
      <TodoList todos={todos} />
      <EventList
        todos={todos}
        selectedFunc={selectedFunc}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
