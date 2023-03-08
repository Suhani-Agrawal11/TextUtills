import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const[Mode,setMode]=useState('light');//whether dark mode is enabled
  const toggleMode=()=>{
    if(Mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529' ;
      showAlert('Dark mode has been enabled','success');
     // document.title="TextUtils.Dark Mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#f8f9fa';
      showAlert('Dark mode has been disabled','success');
      //document.title="TextUtils.Light Mode"
    }
  }
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1000);
  }

  return (//jsx file begin here
  <>
    {/* <h1>this cant be done thats why above this we used jsx fragment so that we are able to write this heading above the return className</h1>
    <div className="App">
  
      <header className="App-header">
      to use javascript in it we use {javascrpit file/content/code} 
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"//className is a keyword of javascript thats why we use className name for the same 
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Suhani
          //props means property
        </a>
      </header>
    </div> */}
   { <Router>
    <div>
<Navbar title="TextUtils" Home="About" mode={Mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<Routes>

  <Route exact path="/" element={<TextForm mode={Mode} showAlert={showAlert}/>}/> 
  <Route exact path="/about" element={<About mode={Mode} />}/>
</Routes>
</div>
</Router>}
        </>
  );
}

export default App;
