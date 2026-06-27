const Search = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center bg-orange-100">
      <div className="text-6xl text-orange-500 mb-4">Google</div>

      <div className="flex bg-orange-200 border border-orange-300 p-2 rounded-full w-80">
        <i className="fa-solid fa-magnifying-glass text-xl text-orange-400 ml-1"></i>

        <input className="flex-1 bg-orange-200 mx-4" />
      </div>

      <div className="mt-4">
        <button className="m-1 rounded-md bg-violet-200 text-violet-400 px-4 py-2">
          Google Search
        </button>

        <button className="m-1 rounded-md bg-violet-200 text-violet-400 px-4 py-2">
          Image Search
        </button>
      </div>
    </div>
  );
};

export default Search;