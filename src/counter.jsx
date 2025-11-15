import { useEffect, useState } from 'react';

export const Counter = ({ taskList }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setCounter(taskList.length);
  }, [taskList]);

  return <span>{counter} item left</span>;
};
