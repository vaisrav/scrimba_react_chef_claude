import { useState } from "react";

function Pad(props) {

    const [on, setOn] = useState(props.on); 

    function toggle() {
        setOn((prev) => !prev);
    }

    return (
        <button onClick={toggle} className={on ? "on" : ""} style={{backgroundColor : props.color}} key={props.key}></button>
    )
}

export default Pad;