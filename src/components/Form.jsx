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
    resetForm();
  };
  const resetForm = () => {
    setTitle("");
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          type="text"
          placeholder="Add a new task"
          required
          value={title}
        />
        <div className="wrapper">
          <button>Create</button>
          <img src="./plus.svg" alt="plus" />
        </div>
      </form>
    </div>
  );
}

export default Form;
