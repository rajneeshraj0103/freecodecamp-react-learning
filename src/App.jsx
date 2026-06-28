import { useState } from "react";
import CatCard from "./CatCard";
import NavButton from "./NavButton";
import CATS from "./Cats";

const App = () => {
  const [catIdx, setCatIdx] = useState(3);

  return (
    <div className="flex justify-center items-center">
      <NavButton
        icon="fa-circle-chevron-left"
        show={catIdx > 0}
        onClick={() => {
          setCatIdx(catIdx - 1);
        }}
      />

      <CatCard cat={CATS[catIdx]} />

      <NavButton
        icon="fa-circle-chevron-right"
        show={catIdx < CATS.length - 1}
        onClick={() => {
          setCatIdx(catIdx + 1);
        }}
      />
    </div>
  );
};

export default App;