import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }
    const handleLowClick = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase", "success")
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleCopyText = () => {
        navigator.clipboard.writeText(text)
    }
    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra spaces removedprops.", "success")
    }
    const [text, setText] = useState('')
    
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1 className='mb-2'>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{
                        backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                        color: props.mode === 'dark' ? 'white' : 'black'
                    }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to LowerCase</button>
                <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyText}>Copy Text</button>
                <button  disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>

            </div>
            <div className="container my-2" style={{ color: props.mode=== 'dark' ? 'white' : 'black'}}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=> {return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=> {return element.length!==0}).length.toFixed(2)} Minutes read</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
            </div>

        </>
    )
}
