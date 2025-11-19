export const List = ({ taskList, setTaskList }) => {
  const deleteTask = (indexToDelete) => {
    const taskListUpdated = taskList.filter((_, index) => {
      return index !== indexToDelete;
    });
    setTaskList(taskListUpdated);
  };

  return (
    <ul className="space-y-2">
      {taskList.map((task, index) => (
        <li 
          key={index}
          className="flex justify-between items-center p-3 bg-gray-50 rounded-lg border border-gray-200 w-full"
        >
          <span className="text-gray-800 text-sm truncate max-w-[200px]">{task}</span>
          <button 
            onClick={() => deleteTask(index)}
            className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs font-medium transition-colors whitespace-nowrap"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};