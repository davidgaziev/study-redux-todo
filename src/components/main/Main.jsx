import { useState } from 'react';
import Input from '../UI/input/Input';
import List from '../UI/list/List';
import './Main.css';
import TodoCheck from '../todocheck/TodoCheck';
import FilterTodo from '../filtertodo/FilterTodo';

const Main = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const [filter, setFilter] = useState(null);

  const createTodo = () => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        text,
        isCompleted,
      },
    ]);
    setText('');
    setIsCompleted(false);
  };

  const removeCompleted = () => {
    setTodos(todos.filter((t) => t.isCompleted !== true));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const makeComplete = (post) => {
    post.isCompleted ? (post.isCompleted = false) : (post.isCompleted = true);
    setTodos([...todos]);
  };

  const getFilteredTodos = (filter) => {
    if (filter === null) return todos;

    return todos.filter((t) => t.isCompleted === filter);
  };

  const filteredTodos = getFilteredTodos(filter);

  return (
    <main>
      <div className="create-todo">
        <TodoCheck
          isCompleted={isCompleted}
          callback={() =>
            isCompleted ? setIsCompleted(false) : setIsCompleted(true)
          }
        />
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key == 'Enter' && createTodo()}
          placeholder="Create a new todo..."
        />
        {text && (
          <button onClick={() => createTodo()}>
            <img
              style={{ transform: 'rotate(45deg)' }}
              src="src/assets/icons/icon-cross.svg"
              alt=""
            />
          </button>
        )}
      </div>

      {todos.length ? (
        <>
          <List
            todos={filteredTodos}
            removeTodo={removeTodo}
            makeComplete={makeComplete}
            removeCompleted={removeCompleted}
          />
          <FilterTodo filter={filter} setFilter={setFilter} />
        </>
      ) : null}
    </main>
  );
};

export default Main;
