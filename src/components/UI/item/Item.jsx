import TodoCheck from '../../todocheck/TodoCheck';
import './Item.css';

const Item = ({ children, todo, removeTodo, makeComplete }) => {
  return (
    <li className={`item ${todo.isCompleted ? 'completed' : ''}`}>
      <TodoCheck
        isCompleted={todo.isCompleted}
        callback={() => makeComplete(todo)}
      />
      <div className="todo-content">{children}</div>
      <button onClick={() => removeTodo(todo.id)}>
        <img src="src/assets/icons/icon-cross.svg" alt="" />
      </button>
    </li>
  );
};

export default Item;
