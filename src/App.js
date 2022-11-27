import { useState } from "react";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter />
    </div>
  );
}
function Counter(props) {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Heading value={counter} />
      <hr />
      <button onClick={() => setCounter(counter + 1)}>CounterInc</button>
      <br />
      <br />
      <button onClick={() => setCounter(counter - 1)}>CounterDec</button>
    </div>
  );
}

function Heading({ value }) {
  return <h1>{value}</h1>;
}
export default App;
