import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About  from './components/About';
import {useState} from 'react'
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');
  const[alert, setAlert]=useState(null);
  const showAlert=(message, type)=>{
              setAlert({
                msg: message,
                ty: type
              })
              setTimeout(()=>{
                setAlert(null);},1500
              );
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark')
      document.body.style.backgroundColor='#042743'
      showAlert("Dark mode enabled.", "Success!")
      document.title='TextUtils-DarkMode'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode enabled.", "Success!")
      document.title='TextUtils-LightMode'
    }
  }
  
  return (
    <>
    <Router>
   <Navbar title="TextUtil"  mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert} toggleMode={toggleMode}/>
   <div className="container my-3">
   
   <Routes>
     
          <Route exact path="/about" element={<About/>} >
          
          </Route>
          <Route exact path="/" element={<TextForm heading="Enter text below to analyze" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>}>
          
          </Route>
          
        </Routes>

        </div>
    </Router>
   
   {/* <About/> */}
   
   </>
  );
}

export default App;

