import { useDispatch } from 'react-redux';
import TodoCheck from '../../todocheck/TodoCheck';
import './Item.css';
import { makeComplete, removeTodo } from '../../../store/todoSlice';
import crossSVG from '../../../static/icons/icon-cross.svg';

const Item = ({ children, todo }) => {
  const dispatch = useDispatch();

  return (
    <li className={`item ${todo.isCompleted ? 'completed' : ''}`}>
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
