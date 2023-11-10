import React , {useState} from 'react'

export default function Textform(props) {
    
    const handleUpClick = () =>{
        console.log("Upper Case was Clicked.");
        let newtext=text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to UpperCase!","success");
        
    }
    const handleLoClick = () =>{
        console.log("Upper Case was Clicked.");
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to LowerCase!","success");
    }
    const handleClearClick = () => {
        setText("");
        props.showAlert("Text Cleared!", "success");
    }    
    const handleOnChange = (event) =>{
        console.log("OnChange");
        setText(event.target.value);
    }
    const handleCopy =() =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpaces =() =>{
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(" "))
    }
    const handleTitleCaseClick = () => {
        let newtext = text.replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
        setText(newtext);
        props.showAlert("Converted to Title Case!", "success");
    }
    const [text,setText] = useState('');
    //text ="eirgie"; // Wrong way to change the state
    // setText("frethe5");
    return (
        <>
        <div className='container my-3' style={{color:props.mode==='dark'?'white':'#024743'}}>
        <h2>{props.heading}</h2>
        <div className="my-3">
        <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#024743'}} value={text} onChange={handleOnChange} id="myBox" rows="12"></textarea>
        <button className='btn btn-primary my-2 mx-2' onClick={handleUpClick}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to Lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpaces}>Remove extra Spaces</button>
        <button className='btn btn-primary mx-2 ' onClick={handleClearClick}>Clear</button>
        <button className='btn btn-primary mx-2 ' onClick={handleTitleCaseClick}>TitleCase</button>
        </div>
        </div>
        <div className="container my-3"  style={{color:props.mode==='dark'?'white':'#024743'}}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ?text:"Enter Something into Text Box to Preview"}</p>
        </div>
        </>
    
  )
}
