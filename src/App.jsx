import { useState } from "react";
import Widget1 from "./Widget1";
import Widget2 from "./Widget2";
import Widget3 from "./Widget3";

const App = () => {

  return (
    <div className="flex flex-col items-center">
      <Widget1 />
      <Widget2 />
      <Widget3 />
    </div>
  );
};

export default App;