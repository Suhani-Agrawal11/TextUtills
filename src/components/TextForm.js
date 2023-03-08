import React, { useState } from 'react';


export default function TextForm(props){
    const [text, settext] = useState("");
    const toupcase=()=>{
        let uptext=text.toUpperCase();
        settext(uptext);
        props.showAlert('Converted to Uppercase','success')
    }
    const handleonchnage=(event)=>{
        settext(event.target.value)
    }
    const tolowcase=()=>{
        let lowtext=text.toLowerCase();
        settext(lowtext);
        props.showAlert('Converted to Lowercase','success')
    }
   return(
     <>
        <div className='container'>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{backgroundColor:props.mode==='dark'?"#212529":"#f8f9fa",color:props.mode==='dark'?"#f8f9fa":"#212529"}}><h2>Enter Your Text Here</h2></label>
            <textarea className="form-control" value={text} onChange={handleonchnage} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor:props.mode==='dark'?"#212529":"#f8f9fa",color:props.mode==='dark'?"#f8f9fa":"#212529"}}></textarea>
        </div>
        <div>
        <button type="button" className="btn btn-outline-primary" onClick={toupcase}>To Uppercase</button>
        <button type="button" className="btn btn-outline-primary" onClick={tolowcase}>To Lowercase</button>
        </div>
        <div className='container' style={{color:props.mode==='dark'?"#f8f9fa":"#212529"}}>
            <h6>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words And {text.length} letters</h6>
            <h6>Time Required to read : {.008*text.split(" ").filter((element)=>{return element.length!==0}).length}</h6>
            <h3>Preview </h3>
            <p>{text}</p>
        </div>
        </div>
    </>
)}
