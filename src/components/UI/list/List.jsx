import { useDispatch } from 'react-redux';
import { removeCompleted } from '../../../store/todoSlice';
import Item from '../item/Item';
import './List.css';
import { useState } from 'react';

const List = ({ todos }) => {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState(null);

  const sortOrder = (a, b) => {
    if (a.order > b.order) {
      return 1;
    }
    return -1;
  };

  return (
    <ul>
      {[...todos].sort(sortOrder).map((t) => (
        <Item key={t.id} todo={t} current={current} setCurrent={setCurrent}>
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
