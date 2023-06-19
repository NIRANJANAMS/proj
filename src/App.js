

import './App.css';

import Navbar from './Components/Navbar';
import Registration from './Components/Registration';



import Selectreg from './Components/Selectreg';

import { Register } from './Components/Register';

import { BrowserRouter,Route,Routes} from 'react-router-dom';
import { Home } from './Components/Home';
import JobSearch from './Components/JobSearch';
import JobList from './Components/JobList';
import Employer from './Components/Employer';
import About from './Components/About';
import Footer from './Components/Footer';
import Contact from './Components/Contact';






function App() {
  return (
   <div>
  <BrowserRouter>
  <Navbar/>
      <Routes>

         <Route exact path="/" element={<Home/>}/>
        <Route exact path="/selectreg" element={<Selectreg/>}/>
        <Route exact path="/register" element={<Registration/>}/>
        <Route exact path="/employeeregister" element={<Register/>}/>
        <Route exact path="/jobsearch" element={<JobSearch/>}/>
        <Route exact path="/joblist" element={<JobList/>}/>
        <Route exact path="/employer" element={<Employer/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
      </Routes>
      <div className='foot'>
      
      <Footer/>

      </div>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
