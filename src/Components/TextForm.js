import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log('Uppercase was clicked' + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(" Converted to Uppercase", "success");
    }

    const handleLoClick = ()=>{
        //console.log('Lowercase was clicked' + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(" Converted to Lowercase", "success");
    }

    const handleOnChange = (event)=>{
        //console.log("On Change")
        setText(event.target.value)
    }

    const handleClearClick = (event)=>{
        //console.log("Clear text")
        let newText = '';
        setText(newText)
        props.showAlert(" text has been cleared", "success");
    }

    const handleOnReverseClick = ()=>{
        //console.log('Reverse text);
        let newText = text.split('').reverse('').join('');
        setText(newText)
        props.showAlert(" text has been Reversed", "success");
    }

    const handleCopy= (event)=>{
        //console.log("Copy text")
        var text = document.getElementById('myBox');
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Copied to Clipboard ", "success");
    }

    const handleExtraSpace = ()=>{
        //console.log('Remove ExtraSpace);
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert(" Removed Extra space", "success");
    }

    const [text, setText] = useState('');
    //text = "new text"; // wrong way to change the state
    //setText("new text"); // correct way to change the state
  return (
    <>
    <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
    <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white',color:props.mode === 'dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>clear text</button>
    <button className="btn btn-primary mx-2" onClick={handleOnReverseClick}>Reverse text</button>
    <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
    </div>


    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'#042743'}}>
        <h2> Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length } minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something in Text-box above to Preview Here "}</p>
    </div>
    </>
  )
}
