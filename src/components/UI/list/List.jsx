import { useDispatch } from 'react-redux';
import { removeCompleted } from '../../../store/todoSlice';
import Item from '../item/Item';
import './List.css';

const List = ({ todos }) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((t) => (
        <Item key={t.id} todo={t}>
          {t.text}
        </Item>
      ))}
      <li className="list-footer">
        <span>{todos.length} items left</span>
        <button onClick={() => dispatch(removeCompleted())}>
          Clear completed
        </button>
      </li>
    </ul>
  );
};

export default List;
