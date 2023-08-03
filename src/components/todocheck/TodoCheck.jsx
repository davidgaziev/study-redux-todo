import './TodoCheck.css';
import checkSVG from '../../static/icons/icon-check.svg';

const TodoCheck = ({ isCompleted, callback }) => {
  return (
    <div className="todo-check">
      <button onClick={callback}>
        {isCompleted ? <img src={checkSVG} /> : ''}
      </button>
    </div>
  );
};

export default TodoCheck;
