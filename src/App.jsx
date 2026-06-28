import {useState} from "react";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="text-4xl flex justify-center border border-black h-screen items-center">
      <button 
      className="text-white w-8 rounded-md bg-red-400"
      onClick={() => setCount(count - 1)}
      >-</button>

      <div className="m-4 text-neutral-400 w-20 text-center">{count}</div>

      <button 
      className="text-white w-8 rounded-md bg-emerald-400"
      onClick={() => setCount(count + 1)}
      >+</button>
    </div>
  );
};

export default App;