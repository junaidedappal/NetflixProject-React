import React from 'react';
import {  BrowserRouter} from 'react-router-dom';
import './App.css';
import {action,originals,comedy,horror} from './Constants/Urls'
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import RowPost from './Components/RowPost/RowPost';
// import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
    <BrowserRouter basename="/">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Orginals'/>
      <RowPost url={action} title='Action Movies' isSmall/>
      <RowPost url={comedy} title='Comedy Movies' isSmall/>    
      <RowPost url={horror} title='Horror Movies' isSmall/>    
    
      <Footer/>
    </BrowserRouter>
    </div>
 
  );
}

export default App;
