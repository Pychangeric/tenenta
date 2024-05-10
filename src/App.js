import './App.css';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Navigation from './Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bedsitters from './Components/Bedsitters/Bedsitters';
import Onebedrooms from './Components/1-Bedrooms/OneBedrooms';
import Twobedrooms from './Components/Twobedrooms/Twobedrooms'

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
          <Route path="/Onebedrooms" element={<Onebedrooms />} />
          <Route path="/Twobedrooms" element={<Twobedrooms />} />
          <Route path="/Onebedrooms" element={<Onebedrooms />} />
          <Route path="/Onebedrooms" element={<Onebedrooms />} />
          <Route path="/Onebedrooms" element={<Onebedrooms />} />
          <Route path="/Onebedrooms" element={<Onebedrooms />} />
          <Route path="/Onebedrooms" element={<Onebedrooms />} />
          <Route path="/Onebedrooms" element={<Onebedrooms />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
