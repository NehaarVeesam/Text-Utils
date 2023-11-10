import { useState } from 'react';
import './App.css';
import Bout from './components/Bout';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {BrowserRouter as Router , Route,Routes} from "react-router-dom";

function App() {
  const [mode , setMode]=useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type) =>{
        setAlert({
          msg:message,
          type:type
        })
        setTimeout(() => {
            setAlert(null)
;        }, 3000);
  }


  const toggleMode = () =>{
    if(mode==='dark')
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
      
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#112743';
      showAlert("Dark Mode has been enabled","success");
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the Text to Analyze below" mode={mode} />} />
          <Route exact path="/about" element={<Bout mode={mode} />} />
          </Routes>
        </div>
      </Router>
      
    </>
  );
}

export default App;
