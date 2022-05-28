// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState, useEffect } from "react";
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import About from './components/About';
// import About from './components/About';

function App() {
  const [mode, setMode] = useState("dark"); // Default Mode
  const [modeSwitch, setModeSwitch] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    }
    else {
      setMode('light');
    }
  }

  useEffect(() => {
    const changeMode = () => {
      if (mode === 'light') {
        setModeSwitch(null);
        document.body.style.backgroundColor = "white";
      }
      else {
        setModeSwitch('checked');
        document.body.style.backgroundColor = "#0a3c56";
      }
    }

    changeMode();
  }, [mode]);

  const [alert, setAlert] = useState(null)
  const showAlert = (message) => {
    setAlert({
      msg: message
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
      <Router>

        <Alert alert={alert} />
        <Navbar title="TextUtils" link1="About" toggleMode={toggleMode} mode={mode} modeSwitch={modeSwitch} />

        <div className="container my-3">
          <Routes>  
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
            <Route exact path="about" element={<About mode={mode}/>} />
          </Routes>
        </div>

      </Router>
    </>
  );
}

export default App;