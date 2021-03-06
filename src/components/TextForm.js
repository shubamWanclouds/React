import React, {useState} from 'react'

export default function TextForm(props) {
    
    const [text, setText] = useState("");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleClear = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Textbox cleared!","success");
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const handleCopy = () => {
        let textValue= document.getElementById("textArea");
        textValue.select();
        navigator.clipboard.writeText(textValue.value);
        props.showAlert("Message Copied to clipboard!","success");
    }
    const handleExtraSpaces = () => {
       let newText= text.split(/[ ]+/);
       setText(newText.join(" "));
       props.showAlert("Extra spaces have been removed successfully!","success");
    }

    return (
      <>
        <div className="container" style={{color:props.mode === 'dark'? 'white': 'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="textArea" rows="8" value = {text} onChange ={handleOnChange}
                style={{backgroundColor: props.mode === 'dark'? '#261C2C':'white', color: props.mode === 'dark'? 'white':'black'}}
                ></textarea>
            </div>
            <button className="btn btn-primary mx-1 my-1" onClick = {handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick = {handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1 my-1" onClick = {handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1 my-1" onClick = {handleExtraSpaces}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1 my-1" onClick = {handleClear}>Clear Text</button>
        </div>

        <div className="container my-3" style={{color:props.mode === 'dark'? 'white': 'black'}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(' ').filter(element=>element.length!=0).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(' ').length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter some text in the box above to preview here'}</p>
        </div>
      </>
    )
}
