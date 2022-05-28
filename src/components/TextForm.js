import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    
    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleUpClick = () => {
        if (text !== '') {
            let newText = text.toUpperCase();
            setText(newText);
            props.showAlert("Converted to UPPERCASE");
        }
    }

    const handleLoClick = () => {
        if (text !== '') {
            let newText = text.toLowerCase();
            setText(newText);
            props.showAlert("Converted to lowercase");
        }
    }

    const handleTiClick = () => {
        if (text !== '') {
            let newText = text.replace(/(^\w|\s\w)(\S*)/g, (_, m1, m2) => m1.toUpperCase() + m2.toLowerCase());
            setText(newText);
            props.showAlert("Converted to Title Case");
        }
    }

    const handleClrClick = () => {
        if (text !== '') {
            setText('');
            props.showAlert("Text cleared!");
        }
    }

    const handleCopy = () => {
        if (text !== '') {
            navigator.clipboard.writeText(text);
            props.showAlert("Copied to Clipboard");
        }
    }

    const handleExtraSpace = () => {
        if (text !== '') {
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "));
            props.showAlert("Removed Extra Space");
        }
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <div>
                    <h1 className="d-inline-block">{props.heading}</h1>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" id="myBox" rows="10" onChange={handleOnChange} value={text} placeholder="Enter text here" style={{ backgroundColor: props.mode === 'light' ? 'white' : '#0a3c56',color: props.mode === 'light' ? 'black' : 'white'}}></textarea>
                </div>
                <button className="btn btn-primary me-2 mb-2" onClick={handleUpClick} disabled={text.length===0}>Convert to UPPERCASE</button>
                <button className="btn btn-primary me-2 mb-2" onClick={handleLoClick} disabled={text.length===0}>Convert to lowercase</button>
                <button className="btn btn-primary me-2 mb-2" onClick={handleTiClick} disabled={text.length===0}>Convert to Title Case</button>
                <button className="btn btn-primary me-2 mb-2" onClick={handleCopy} disabled={text.length===0}>Copy</button>
                <button className="btn btn-primary me-2 mb-2" onClick={handleExtraSpace} disabled={text.length===0}>Handle Extra Space</button>
                <button className="btn btn-secondary float-sm-end mb-2" onClick={handleClrClick} disabled={text.length===0}>Clear</button>
            </div>

            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2 className='pt-3'>Your Text Summary</h2>
                <p>{text.trim().split(/\s+/).filter((element) => {return element.length!==0}).length} words and {text.length} characters</p>

                <b>{(text.trim().split(/\s+/).filter((element) => {return element.length!==0}).length)*0.08} minutes (time to read)</b>

                <h3 className="mt-2">Preview</h3>
                <p>{text.length>0?text:'Nothing to Preview'}</p>

            </div>
        </>
    )
}
