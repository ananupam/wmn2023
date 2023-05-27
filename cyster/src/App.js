import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
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
      </Router>
    </div>
  );
}

export default App;
