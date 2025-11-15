import { useState } from 'react';
import './App.css';
import { List } from './list';
import { Counter } from './counter';

const MOCK_DATA = ['Make the bed', 'Wash my hands', 'Eat breakfast'];

const ENTER_KEY_CODE = 'Enter';

function App() {
  const [taskList, setTaskList] = useState(MOCK_DATA);
  const [input, setInput] = useState('');

  const addTask = (e) => {
    if (e.key === ENTER_KEY_CODE && input.trim() !== '') {
      const taskListUpdated = [...taskList, input.trim()];
      setTaskList(taskListUpdated);
      setInput('');
    }
  };

  return (
    <>
      <input
        type="text"
        value={input}
        placeholder="Add a new task..."
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={addTask}
      />
      <List taskList={taskList} setTaskList={setTaskList} />
      <br />
      <Counter taskList={taskList} />
    </>
  );
}

export default App;