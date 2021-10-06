import "./styles.css";

export default function App() {
  let user = {name: "Сергей Рубан", age: 30};

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <p>Ok! We are ready to become magic!</p>
      <div>{user.name}</div>
    </div>
  );
}
