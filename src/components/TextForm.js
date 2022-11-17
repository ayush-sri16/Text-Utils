import React, { useState } from 'react'

export default function TextForm(props) {


    const upperCaseClick = () => {
        // console.log('upper case was clicked');
        let newText = text.toUpperCase();
        setText(newText);
        props.alerting("Converted to UpperCase!", "success");
    }
    const lowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.alerting("Converted to LowerCase!", "success");
    }
    const firstUpperCaseClick = () => {
        let words = text.split(" ").map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1);
          })
          .join(' ');
        setText(words);
        props.alerting("Your Input has been Capitalized!", "success");
    }
    const resetClick = () => {
        setText("");
        props.alerting("The Text has been cleared", "success");
    }
    const copyClick = () => {
        let text = document.getElementById("mybox")
        text.select()
        navigator.clipboard.writeText(text.value);
        props.alerting("Copied to Clipboard", "success");

    }

    const handleOnChange = (event) => {
        console.log('changeHoja');
        setText(event.target.value)
    }

    const [text, setText] = useState('')
    return (
        <>
            <div className='container' style={{ color: props.mode === 'light' ? "black" : "white" }}>
                <h1>{props.heading}</h1>
                <div className="mb3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'light' ? "white" : "#242424", color: props.mode === 'light' ? "black" : "white" }} onChange={handleOnChange} id="mybox" cols="" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mt-3 mx-3' onClick={upperCaseClick}>Convert to UpperCase</button>
                <button className='btn btn-primary mt-3 mx-3' onClick={lowerCaseClick}>Convert to LowerCase</button>
                <button className='btn btn-primary mt-3 mx-3' onClick={firstUpperCaseClick}>Convert first letter to UpperCase</button>
                <button className='btn btn-primary mt-3 mx-3' onClick={copyClick}>Copy to Clipboard</button>
                <button className='btn btn-primary mt-3 mx-3' onClick={resetClick}>Reset</button>

            </div>
            <div className="container" style={{ color: props.mode === 'light' ? "black" : "white" }}>
                <h1 className='my-3'>Your text summary is here</h1>
                <p>Your text words are = {text.split(" ").length} , Your text Characters are = {text.length}</p>
                <p><b>{Math.round(0.00454545454 * text.split(" ").length)}min</b> Read</p>
                <h3>Preview</h3>
                <p className='container'>{text}</p>
            </div>

        </>
    )
}

