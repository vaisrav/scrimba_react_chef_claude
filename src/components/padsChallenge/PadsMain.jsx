import { useState } from "react";
import padsData from "./pads.js";
import Pad from "./Pad.jsx";

function PadsMain() {
  const [pads, setPads] = useState(padsData);

  function toggle(id) {
    setPads((prevpads) =>
      prevpads.map((pad) => (pad.id === id ? { ...pad, on: !pad.on } : pad))
    );
  }

  const buttonElements = pads.map((pad) => (
    <Pad
      click={toggle}
      on={pad.on} //commented out to use derived state to make changes to the pads
      key={pad.id}
      id={pad.id}
      color={pad.color}
    />
  ));

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}

export default PadsMain;
