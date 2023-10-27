import { useState } from "react";
import "./Form.css";
function Form({ addTodos }) {
  const [title, setTitle] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: Math.random(),
      title: title,
      selected: false,
    };
    addTodos(data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <input
          onChange={(e) => {
            setTitle(e.target.value.trim());
          }}
          type="text"
          placeholder="Adicione uma nova tarefa"
          required
        />
        <div className="wrapper">
          <button>Click</button>
          <img src="./plus.svg" alt="plus" />
        </div>
      </form>
    </div>
  );
}

export default Form;
