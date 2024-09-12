import Navbar from './components/Navbar.js'
import './App.css';
import TextForm from './components/TextForm.js';
import About from './components/About.js';
import { useState } from 'react';
import Alert from './components/Alert.js';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode,setMode]= useState('light')
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')
  }
 
  
  const toggleMode = (cls)=>{
    removeBodyClasses()
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#465362'
      

      showAlert("Dark Mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode has been enabled", "success")
    }
  }
  return (
    <>
    <Router basename="/Word-Counter">
    <Navbar title="TextCounter" mode={mode} toggleMode={toggleMode}  showAlert={showAlert}/>
    <Alert alert={alert}/>
   
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextCounter-Word Counter, Character Counter, Remove Extra Spaces" toggleMode={toggleMode} mode={mode}/>}/>
        </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
