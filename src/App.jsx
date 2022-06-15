import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Counter } from "./Components/Counter";
import { Todo } from "./Components/Todo/Todo";
import { AllRoutes } from "./Routes/AllRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <br />
      <br />
      <AllRoutes />
    </div>
  );
}

export default App;
