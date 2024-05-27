import './App.css';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import Navigation from './Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bedsitters from './Components/Bedsitters/Bedsitters';
import Onebedrooms from './Components/1-Bedrooms/OneBedrooms';
import Twobedrooms from './Components/Twobedrooms/Twobedrooms';
import Threebedrooms from './Components/Threebedrooms/Threebedrooms';
import Vanillas from './Components/Vanillas/Vanillas';
import Hotels from './Components/Hotels/Hotels';
import HomeCompounds from './Components/HomeCompounds/HomeCompounds';
import Bungalows from './Components/Bungalows/Bungalows';
import Apartments from './Components/Apartments/Apartments';
import Airbnbs from './Components/Airbnbs/Airbnbs'

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
          <Route path="/Threebedrooms" element={<Threebedrooms />} />
          <Route path="/Vanillas" element={<Vanillas />} />
          <Route path="/Hotels" element={<Hotels />} />
          <Route path="/HomeCompounds" element={<HomeCompounds />} />
          <Route path="/Bungalows" element={<Bungalows />} />
          <Route path="/Apartments" element={<Apartments />} />
          <Route path="/Airbnbs" element={<Airbnbs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
