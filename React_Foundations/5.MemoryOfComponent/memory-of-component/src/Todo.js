import TodoList from "./TodoList.js";
import { useState } from "react";

function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(1);
  function addTodo() {
    let obj = { id: count, item: text };
    setCount(count + 1);
    todos.push(obj);
    console.log(todos);
    setTodos([...todos]);
  }

  return (
    <div>
      <input type='text' onChange={(event) => setText(event.target.value)} />
      <button onClick={() => addTodo()}>Add</button>
      <TodoList todos={todos} />
    </div>
  );
}

export default Todo;
