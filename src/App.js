import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import About from './Component/About/About';
import Appointment from './Component/Appointment/Appointment';
import Blog from './Component/Blog/Blog';
import Doctors from './Component/Doctors/Doctors';
import Footer from './Component/Footer/Footer';
import Home from './Component/Home/Home';
import Navv from './Component/Nav/Nav';



function App() {
  return (
    <div className="App">
  <Navv />
      <Routes>
        <Route path="/Care-Clinig" element={<Home/>}/>
        <Route path="/doctors"  element={<Doctors/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      <Footer />
    
     
    </div>
  );
}

export default App;
