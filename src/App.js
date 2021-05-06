import logo from './logo.svg';
import './App.css';
import './css/style.css';
import Banner  from './components/Banner';
import Navbar from './components/Navbar';
import InputFilter from './components/InputFilter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.slim.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import News from './components/News';
import News_series from './components/News_series';


function App() {
  return (
    <html>

    <header> 
      <h1>NetCinema</h1> 
      <InputFilter/> 
      <Navbar/> 
    </header> 
    
    <Banner/> 
    <News/>
    <News_series/> 
     
    
   </html>
    
    
  );
}

export default App;
