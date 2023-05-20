import React, {useState} from "react";

export default function InputField(props) {
    const [text, setText] = useState("")


    const handleChange = (e) => {
        setText(e.target.value)
    }
    
    return (
        <>
            <div id="label">{props.type}</div>
            <div>
            <input type="text" id={props.id} onChange={(e) => handleChange(e)} value={text} placeholder="Type here..."/> 
            </div>
        </>
    );
}

