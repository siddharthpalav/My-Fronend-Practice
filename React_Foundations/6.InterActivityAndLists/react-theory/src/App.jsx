import "./App.css";
import Todo from "./Todo.jsx";

function App() {
  const todoList = [
    { id: 1, data: "todo 1" },
    { id: 2, data: "todo 2" },
  ];
  return (
    <div className='App'>
      <Todo todoList={todoList} />
    </div>
  );
}

export default App;
