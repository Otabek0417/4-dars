import "./Todo.css";
function TodoList({ todos, newFilter }) {
  return (
    <div className="todoList">
      <div className="todoList__container container">
        <div className="todoList__concluidas">
          <div className="todoList__lengths">
            <span className="todoList__length">Tasks created</span>
            <span className="todoList__length-number">{todos.length}</span>
          </div>
          <div className="todoList__dones">
            <div className="todoList__dones-wrapper">
              <span className="todoList__done">Completed</span>
              <span className="todoList__done-number">{todos.length} of {newFilter}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoList;
