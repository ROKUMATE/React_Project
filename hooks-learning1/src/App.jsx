import { useState, useEffect } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  const addCounter = () => {
    if (counter < 20) setCounter(counter + 1);
  };

  const substractCounter = () => {
    if (counter > 0) setCounter(counter - 1);
  };

  return (
    <>
      <h2>Button Clicking Checking</h2>
      <h3>The Current Value of the Coutner is: {counter}</h3>

      <button onClick={addCounter}> Add to the Counter</button>
      <br />
      <br />

      <button onClick={substractCounter}> Substract from the Counter</button>
      <p>This is the Counter Value: {counter}</p>
    </>
  );
}

export default App;
