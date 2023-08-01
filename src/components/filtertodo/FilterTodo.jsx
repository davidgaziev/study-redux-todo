import './FilterTodo.css';

const FilterTodo = ({ filter, setFilter }) => {
  return (
    <div className="filter-todo">
      <button
        className={filter === null ? 'active' : ''}
        onClick={() => setFilter(null)}
      >
        All
      </button>
      <button
        className={filter === false ? 'active' : ''}
        onClick={() => setFilter(false)}
      >
        Active
      </button>
      <button
        className={filter ? 'active' : ''}
        onClick={() => setFilter(true)}
      >
        Completed
      </button>
    </div>
  );
};

export default FilterTodo;
