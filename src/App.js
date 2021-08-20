import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const toggleMode = () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#261C2C';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }

    const showAlertMsg = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
    }
  }

  

  return (
    <>
      <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyse" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
