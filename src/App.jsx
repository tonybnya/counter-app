import { useState } from "react";
import counterLogo from "/counter.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center justify-center pb-20">
        <img src={counterLogo} className="logo" alt="counter logo" />
        <h1 className="tracking-tighter">Counter App</h1>
        <div className="flex gap-2">
          <a target="_blank" href="https://github.com/tonybnya/counter-app">
            <i class="fa-brands fa-github"></i>
          </a>
          <a target="_blank" href="https://tonybnya-counter-app.onrender.com">
            <i class="fa-solid fa-globe"></i>
          </a>
        </div>
      </div>
      <div className="card text-4xl">
        <button
          className="mr-2 bg-yellow-400"
          onClick={() => setCount((count) => count - 1)}
        >
          -
        </button>{" "}
        <button
          className="mr-2 bg-[#1a1a1a]"
          onClick={() => setCount((count) => count + 1)}
        >
          {count}
        </button>{" "}
        <button
          className="bg-green-500"
          onClick={() => setCount((count) => count + 1)}
        >
          +
        </button>
        <br />
        <br />
      </div>
      <div className="text-2xl">
        <button className="bg-red-500" onClick={() => setCount(0)}>
          Reset
        </button>
        {/* <button onClick={() => setCount((count) => 0)}>Reset</button> */}
      </div>
    </>
  );
}

export default App;
