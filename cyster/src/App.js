import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import Appointment from './pages/Appointment/Appointment';
import Consult from './pages/Consult/Consult';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
        </Routes>
        <Routes>
          <Route exact path='/login' element={<Login/>} />
        </Routes>
        <Routes>
          <Route exact path='/appointment' element={<Appointment/>} />
        </Routes>
        <Routes>
          <Route exact path='/consult' element={<Consult/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
