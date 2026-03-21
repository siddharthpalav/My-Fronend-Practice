import { useState } from "react";

let x = 10;
function Counter() {
  const [count, setCount] = useState(10);

  function updateCount() {
    setCount(count + 1);
  }

  function updateX() {
    x++;
  }

  return (
    <div className='counter'>
      <span id='counterValue'>{x}</span>
      <br />
      <span>{count}</span>
      <br />

      <button onClick={updateX}>Click & Update X</button>
      <br />
      <button onClick={() => updateCount()}>Click & Update Count</button>
      <br />

      {/* <ul>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </ul> */}
      <br />
    </div>
  );
}

export default Counter;
