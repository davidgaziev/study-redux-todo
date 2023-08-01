import './TodoCheck.css';

const TodoCheck = ({ isCompleted, callback }) => {
  return (
    <div className="todo-check">
      <button onClick={callback}>
        {isCompleted ? <img src="src/assets/icons/icon-check.svg" /> : ''}
      </button>
    </div>
  );
};

export default TodoCheck;
