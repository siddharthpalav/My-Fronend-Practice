const App = () => {
  return (
    <div>
      <h1>Welcome to Wassepur!</h1>
      <button>Click Me</button>
    </div>
  );
};

const rootNode = document.getElementById("root");
const root = ReactDOM.createRoot(rootNode);
root.render(App());
