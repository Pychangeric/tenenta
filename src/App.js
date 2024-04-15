import './App.css';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Navigation from './Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bedsitters from './Components/Bedsitters/Bedsitters';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/bedsitters" element={<Bedsitters />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
