import { useDispatch, useSelector } from 'react-redux';
import TodoCheck from '../../todocheck/TodoCheck';
import { makeComplete, removeTodo, reorder } from '../../../store/todoSlice';
import crossSVG from '../../../static/icons/icon-cross.svg';
import './Item.css';

const Item = ({ children, todo, current, setCurrent }) => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

  const dragStartHandler = (e, todo) => {
    setCurrent(todo);
    e.target.style.opacity = 1;
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
  };

  const dropHandler = (e, todo) => {
    e.preventDefault();
    dispatch(
      reorder(
        todos.map((t) => {
          if (t.order === todo.order) {
            return { ...t, order: current.order };
          }
          if (t.order === current.order) {
            return { ...t, order: todo.order };
          }
          return t;
        })
      )
    );
  };

  return (
    <li
      draggable={true}
      onDragStart={(e) => dragStartHandler(e, todo)}
      onDragOver={(e) => dragOverHandler(e)}
      onDrop={(e) => dropHandler(e, todo)}
      className={`item ${todo.isCompleted ? 'completed' : ''}`}
    >
      <TodoCheck
        isCompleted={todo.isCompleted}
        callback={() => dispatch(makeComplete({ id: todo.id }))}
      />
      <div className="todo-content">{children}</div>
      <button onClick={() => dispatch(removeTodo({ id: todo.id }))}>
        <img src={crossSVG} alt="" />
      </button>
    </li>
  );
};

export default Item;
