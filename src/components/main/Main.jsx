import { useState } from 'react';
import Input from '../UI/input/Input';
import List from '../UI/list/List';
import './Main.css';
import TodoCheck from '../todocheck/TodoCheck';
import FilterTodo from '../filtertodo/FilterTodo';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todoSlice';
import useFilter from '../hooks/useFilter';
import crossSVG from '../../static/icons/icon-cross.svg';

const Main = () => {
  const [text, setText] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [filter, setFilter] = useState(null);
  const dispatch = useDispatch();

  const createTodo = () => {
    dispatch(addTodo({ text, isCompleted }));
    setText('');
    setIsCompleted(false);
  };

  const todos = useFilter(filter);

  return (
    <main>
      <div className="create-todo">
        <TodoCheck
          isCompleted={isCompleted}
          callback={() => setIsCompleted(!isCompleted)}
        />
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key == 'Enter' && createTodo()}
          placeholder="Create a new todo..."
        />
        {text && (
          <button onClick={() => createTodo()}>
            <img style={{ transform: 'rotate(45deg)' }} src={crossSVG} alt="" />
          </button>
        )}
      </div>

      <List todos={todos} />
      <FilterTodo filter={filter} setFilter={setFilter} />
    </main>
  );
};

export default Main;
