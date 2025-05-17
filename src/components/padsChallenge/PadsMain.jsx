import { useState } from "react";
import padsData from "./pads.js";
import Pad from "./Pad.jsx";

function PadsMain() {
  const [pads, setPads] = useState(padsData);

  const buttonStyles = {
    backgroundColor: "pink",
  };

  const buttonElements = pads.map((pad) => (
    <Pad on={pad.on} key={pad.id} color={pad.color} style={buttonStyles} />
  ));

  

  return (
    <main>
      <div className="pad-container">{buttonElements}</div>
    </main>
  );
}

export default PadsMain;
