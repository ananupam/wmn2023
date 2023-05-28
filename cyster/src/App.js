import './App.css';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import Appointment from './pages/Appointment/Appointment';
import Consult from './pages/Consult/Consult';
import Dashboard from './pages/Dashboard/Dashboard';
import Guide from './pages/Guide/Guide';
import Causespage from './pages/PageSection/Causespage';
import Fertilitypage from './pages/PageSection/Fertilitypage';
import Longtermpage from './pages/PageSection/Longtermpage';
import Mentalhealthpage from './pages/PageSection/Mentalhealthpage';
import Periodspage from './pages/PageSection/Periodspage';
import Sexualhealthpage from './pages/PageSection/Sexualhealthpage';
import Symptomspage from './pages/PageSection/Symptomspage';
import Treatmentpage from './pages/PageSection/Treatmentpage';
import Faq from './components/Faq';

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
          <Route exact path='/appointment/:docID' element={<Appointment/>} />
        </Routes>
        <Routes>
          <Route exact path='/consult' element={<Consult/>} />
        </Routes>
        <Routes>
          <Route exact path='/dashboard' element={<Dashboard/>} />
        </Routes>
        <Routes>
          <Route exact path='/guide' element={<Guide/>} />
        </Routes>
        <Routes>
          <Route path='/causes' element={<Causespage/>} />
        </Routes>
        <Routes>
          <Route path='/fertility' element={<Fertilitypage/>} />
        </Routes>
        <Routes>
          <Route path='/longterm' element={<Longtermpage/>} />
        </Routes>
        <Routes>
          <Route path='/mentalhealth' element={<Mentalhealthpage/>} />
        </Routes>
        <Routes>
          <Route path='/periods' element={<Periodspage/>} />
        </Routes>
        <Routes>
          <Route path='/treatment' element={<Treatmentpage/>} />
        </Routes>
        <Routes>
          <Route path='/sexualhealth' element={<Sexualhealthpage/>} />
        </Routes>
        <Routes>
          <Route path='/symptoms' element={<Symptomspage/>} />
        </Routes>
        <Routes>
          <Route path='/faq' element={<Faq/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
