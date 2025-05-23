import { useState } from "react";

function Pad(props) {

    const [on, setOn] = useState(props.on); 

    return (
        <button 
        onClick={props.click} 
        className={on ? "on" : ""} 
        style={{backgroundColor : props.color}} 
        key={props.key}
        ></button>
    )
}

export default Pad;