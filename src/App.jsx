import { useState } from "react";

const App = () => {
  const [message, setMessage] = useState("hi");

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-3xl text-stone-400">
        {message}
      </div>

      <div className="mt-4">
        <button
          className="m-2 px-4 py-2 text-white bg-green-400 rounded-md"
          onClick={() => {
            setMessage("bye!");
          }}
        >
          one
        </button>

        <button
          className="m-2 px-4 py-2 text-white bg-red-400 rounded-md"
          onClick={() => {
            setMessage("yay!");
          }}
        >
          two
        </button>

        <button
          className="m-2 px-4 py-2 text-white bg-violet-400 rounded-md"
          onClick={() => setMessage("woooo!")}
        >
          three
        </button>
      </div>
    </div>
  );
};

export default App;