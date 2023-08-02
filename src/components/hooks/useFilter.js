import { useSelector } from 'react-redux';

const useFilter = (filter) => {
  const todos = useSelector((state) => state.todos.todos);

  if (filter === null) return todos;

  return todos.filter((t) => t.isCompleted === filter);
};

export default useFilter;
