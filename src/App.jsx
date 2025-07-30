import { useState } from "react";
import "./App.css";

function App() {
  let [Counter, setCounter] = useState(0);

  const addValue = () => {
    if (Counter < 20) {
      setCounter(Counter + 1);
    }
  };
  const removeValue = () => {
    if (Counter > 0) {
      setCounter(Counter - 1);
    }
  };
  return (
    <>
      <h1>Click and Count</h1>
      <p>Instructions : You can add value between (0-20)</p>
      <h2>Counter Value : {Counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
