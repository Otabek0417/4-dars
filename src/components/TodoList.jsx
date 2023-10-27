import "./Todo.css";
function TodoList({ todos }) {
  return (
    <div className="todoList">
      <div className="todoList__container container">
        <div className="todoList__concluidas">
          <div className="todoList__lengths">
            <span className="todoList__length">Tarefas criadas</span>
            <span className="todoList__length-number">{todos.length}</span>
          </div>
          <div className="todoList__dones">
            <div className="todoList__dones-wrapper">
              <span className="todoList__done">Concluídas</span>
              <span className="todoList__done-number">{todos.length} de 5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
