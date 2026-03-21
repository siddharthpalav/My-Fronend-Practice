import TodoItem from "./TodoItem";
import { useState } from "react";

function Todo() {
  const [todoItems, setTodoItems] = useState([
    { data: "todo1", id: "123" },
    { data: "todo2", id: 213 },
  ]);

  const [inputText, setInputText] = useState("");

  function deleteTodo(id) {
    let remainingTodos = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(remainingTodos);
  }

  function editTodo(id, newTodo) {
    let updatedTodos = todoItems.map((todo) => {
      if (todo.id === id) todo.data = newTodo;
      return todo;
    });
    setTodoItems(updatedTodos);
  }

  return (
    <>
      <input
        type='text'
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <button
        onClick={() =>
          setTodoItems([
            ...todoItems,
            {
              data: inputText,
              id: new Date().getTime(),
            },
          ])
        }
      >
        Add Todo
      </button>
      <ul>
        {todoItems.map((todo) => (
          <TodoItem
            todo={todo}
            key={todo.id}
            delete={() => deleteTodo(todo.id)}
            edit={(newTodo) => editTodo(todo.id, newTodo)}
          />
        ))}
      </ul>
    </>
  );
}

export default Todo;
