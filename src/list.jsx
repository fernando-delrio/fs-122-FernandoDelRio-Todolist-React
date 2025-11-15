export const List = ({ taskList, setTaskList }) => {
  const deleteTask = (indexToDelete) => {
    const taskListUpdated = taskList.filter((_, index) => {
      return index !== indexToDelete ? true : false;
    });
    setTaskList(taskListUpdated);
  };

  return (
    <ul>
      {taskList.map((task, index) => (
        <li>
          {task} <button onClick={() => deleteTask(index)}>X</button>
        </li>
      ))}
    </ul>
  );
};
