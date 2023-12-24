import logo from './logo.svg';
import './App.css';
import Landing from "./views/Landing/Landing";
import Login from "./views/Login/Login";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element= {<Landing/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
