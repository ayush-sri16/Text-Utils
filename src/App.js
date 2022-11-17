import './App.css';
// import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from 'react'

// import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";


function App() {
    const [mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type
        })
    }
    setTimeout((showAlert) => {
        setAlert(null)
    }, 2000);

    const toggleD = () => {
        if (mode === 'light') {
            setMode('dark');
            document.body.style.backgroundColor = "#242424";
            showAlert("Darkmode has been Enabled", "success")
            document.title = "Text Utils-Darkmode";

        } else {
            setMode('light');
            document.body.style.backgroundColor = "white";
            showAlert("Lightmode has been Enabled", "success")
            document.title = "Text Utils-Lightmode";
        }
    }
    return (
        <>
        {/* <Router> */}
            <Navbar title="Text Utils" aboutText="About Us" mode={mode} toggleMode={toggleD} />
            <Alert alert={alert} />

            <div className="container my-3">
                {/* <Routes>
                <Route path="/" element={< TextForm heading="Enter the text to analyse" alerting={showAlert} mode={mode} />} />
                <Route path="/about" element={<About />}/>   
                </Routes> */}
                < TextForm heading="Enter the text to analyse" alerting={showAlert} mode={mode} />
            </div>
        {/* </Router> */}
        </>

    )
};

export default App;