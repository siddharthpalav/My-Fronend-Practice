function TodoList({ todos }) {
  // const todos = [
  //   { id: 1, item: "todo 1" },
  //   { id: 2, item: "todo 2" },
  //   { id: 3, item: "todo 3" },
  // ];
  return (
    <div>
      <ul>
        {todos.map((value, index) => (
          <li key={index}>
            {value.id}. {value.item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
