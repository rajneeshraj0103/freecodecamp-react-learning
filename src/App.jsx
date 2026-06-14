const BooleanCheck = () => {
  const boolean  = true;
  return(
    <div className={`${boolean ? "bg-orange-600" : "bg-purple-600"} text-white`}>
    ToDo!
    </div>  
  )
}

const App = () => {
  return <div>
    <BooleanCheck/>
    <button className="border-2 border-green-600 text-green-400 px-8 py-4 m-4 rounded-md">
      first
    </button>
    <button className="rounded-lg bg-sky-400 text-white px-10 py-4 text-3xl hover:text-base m-4">
      second
    </button>
    <button className="bg-violet-100 text-violet-600 px-8 py-2 rounded-full m-4">
      third
    </button>
    <button className="m-4 bg-cyan-700 text-cyan-200 p-10 rounded-lg hover:bg-cyan-200 hover:text-cyan-700">
      four
    </button>
  </div>
};

export default App;

