import React, {useState} from 'react';
import PropTypes from 'prop-types';


export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick= ()=>{
        
        let newText=text.toUpperCase();
setText('Converting');
setTimeout(() => {
    setText(newText);
}, 100);
props.showAlert("Converted to Uppercase", "Success!");
    }
const handleLoClick= ()=>{
        
    let newText=text.toLowerCase();

setText('Converting');
setTimeout(() => {
setText(newText);
}, 100);
props.showAlert("Converted to LowerCase", "Success!");
    }
    const handleClearClick=()=>{
        setText('');
        props.showAlert("Textarea cleared", "Success!");
    }
    const handleOnChange= (event)=>{
        
        setText(event.target.value);
    }
  return (
      <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2 >{props.heading}</h2>
<div className="mb-3 my-3">
  <label for="exampleFormControlTextarea1" class="form-label text-center"></label>
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="exampleFormControlTextarea1" rows="10"></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleLoClick} >Convert to lowercase</button>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
<button className="btn btn-danger mx-2" onClick={handleClearClick}>Clear</button>
{/* <button className="btn btn-success mx-2" onClick={handleSenClick}>Sentence Case</button>
<button className="btn btn-dark mx-2" onClick={handleAltClick}>Alternating case</button> */}
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2 >Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text to get the preview"}</p>
    </div>
    </>
  )
}
