//import logo from './logo.svg';
import './App.css';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom"; 

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode enable or not.

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert ({
      msg : message,
      type : type
    })
    setTimeout(() => {
         setAlert(null);
    }, 1500);
  }


  const toggleMode = ()=> {
    if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#042743';
    showAlert(" Dark Mode Has been enabled", "success")
    document.title = 'TextUtils - Dark mode';
    // setInterval(() => {
    //   document.title = 'TextUtils is Amazing mode';
    // }, 2000);

    // setInterval(() => {
    //   document.title = ' Install TextUtils Now';
    // }, 1500);
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert(" Light Mode Has been enabled", "success")
    document.title = 'TextUtils - light mode';
  }
}

  return (
   
  <>

  {/* {/* <Navbar title="TextUtils" aboutText="About TextUtils"/>  */}
  {/* // <Navbar/>   */}
  {/* <Router> */}
  <Navbar title="TextUtils" mode={mode}  toggleMode={toggleMode} />
  <Alert alert= {alert} />
  <div className="container my-3">
  {/* <Routes> */}
        {/* <Route exact path="/about" element={<About />}/> */}
        {/* <Route exact path="/">element= */}
        {<TextForm showAlert={showAlert} heading="Enter the text to Analyze Below :" mode={mode} />}/
  {/* </Routes> */}
  </div>
  {/* </Router> */}

  </>
    
  );
}

export default App;
