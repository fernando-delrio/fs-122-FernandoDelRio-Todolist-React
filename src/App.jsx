import { useState } from 'react';
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-8 px-4">
      {}
      <div className="max-w-xs mx-auto bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          My Todo List
        </h1>
        
        <input
          type="text"
          value={input}
          placeholder=" Add a new task and press Enter..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={addTask}
          className="w-full p-4 border border-gray-300 rounded-xl mb-6 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        />
        
        <List taskList={taskList} setTaskList={setTaskList} />
        <br />
        <Counter taskList={taskList} />
      </div>
    </div>
  );
}

export default App;