export const Counter = ({ taskList }) => {
  return (
    <div className="text-center p-3 bg-blue-100 text-blue-700 rounded-lg font-medium">
      <span className="font-bold">{taskList.length}</span> 
      item{taskList.length !== 1 ? 's' : ''} left
    </div>
  );
};