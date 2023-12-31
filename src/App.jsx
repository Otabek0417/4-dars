import React, { useEffect, useState } from "react";
// *Components
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import EventList from "./components/EventList";

const localStorageFunc = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

function App() {
  const [todos, setTodos] = useState(localStorageFunc());

  console.log(todos);

  // !AddTodos
  const addTodos = (newTodo) => {
    console.log(newTodo);
    setTodos((prev) => {
      return [...prev, newTodo];
    });
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  //! Select
  const selectedFunc = (id) => {
    setTodos((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, selected: !item.selected };
        } else {
          return item;
        }
      });
    });
  };
  //! Delete
  const deleteItem = (id) => {
    setTodos((prev) => {
      return prev.filter((item) => {
        return item.id !== id;
      });
    });
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos.length]);

  // filterSelectLength
  const newFilter = todos.filter((item) => {
    return item.selected === true;
  });

  return (
    <div className="App">
      <Header />
      <Form addTodos={addTodos} />
      <TodoList todos={todos} newFilter={newFilter.length} />
      <EventList
        todos={todos}
        selectedFunc={selectedFunc}
        deleteItem={deleteItem}
      />
    </div>
  );
}

export default App;
