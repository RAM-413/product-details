import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './Components/Navbar';
import  Section1  from './Components/Section1';
import  Section2  from './Components/Section2';
import  Section3  from './Components/Section3';
import  Section4  from './Components/Section4';
import Footer from './Components/Footer'

function App() {
  return (
    <div>
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Footer/>
    </div>
  );
}

export default App;
