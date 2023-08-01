import Item from '../item/Item';
import './List.css';

const List = ({ todos, removeTodo, makeComplete, removeCompleted }) => {
  return (
    <ul>
      {todos.map((t) => (
        <Item
          key={t.id}
          todo={t}
          removeTodo={removeTodo}
          makeComplete={makeComplete}
        >
          {t.text}
        </Item>
      ))}
      <li className="list-footer">
        <span>{todos.length} items left</span>
        <button onClick={() => removeCompleted()}>Clear completed</button>
      </li>
    </ul>
  );
};

export default List;
