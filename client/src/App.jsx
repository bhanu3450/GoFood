
import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css' 
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";
import Home from './screens/Home.jsx';
import Login from './screens/Login.jsx';

function App() {
  return (
    <Router>
    <div> 
      <Routes>
        <Route exact path = "/" element = {<Home/>} />
        <Route exact path = "/login" element = {<Login/>} />
        </Routes> 
      </div>
    </Router>
    
  );
}

export default App;
