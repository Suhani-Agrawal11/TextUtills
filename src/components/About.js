import React from 'react';
//how to implement dark mode
export default function About(props) {
  return (
    <div className="container" style={{backgroundColor:props.mode==='dark'?"#212529":"#f8f9fa",color:props.mode==='dark'?"#f8f9fa":"#212529"}} >
        <h1>About TextUtils</h1>
        <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                <button className="accordion-button collapsed" style={{backgroundColor:props.mode==='dark'?"#212529":"#f8f9fa",color:props.mode==='dark'?"#f8f9fa":"#212529"}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                <strong>Technique Used</strong>
                </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?"#212529":"#f8f9fa",color:props.mode==='dark'?"#f8f9fa":"#212529"}}>To develop this website I've used React and bootstrap.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={{backgroundColor:props.mode==='dark'?"#212529":"#f8f9fa",color:props.mode==='dark'?"#f8f9fa":"#212529"}} data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                <strong>Idea</strong>
                </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"  data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?"#212529":"#f8f9fa",color:props.mode==='dark'?"#f8f9fa":"#212529"}}>The idea of this project is not mine. This is one of the project by CodeWithHarry to learn React.</div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                <button className="accordion-button collapsed" type="button" style={{backgroundColor:props.mode==='dark'?"#212529":"#f8f9fa",color:props.mode==='dark'?"#f8f9fa":"#212529"}} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                <strong>What we can do?</strong>
                </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" style={{backgroundColor:props.mode==='dark'?"#212529":"#f8f9fa",color:props.mode==='dark'?"#f8f9fa":"#212529"}}>Through this website we can perfom various operation on the entered text like can convert it to lower case or upper case. We also set the theme according to our wish.</div>
                </div>
            </div>
        </div>
    </div>
)}
