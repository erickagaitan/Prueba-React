import React from 'react';
import './App.css';
import Header from './Componentes/Header.jsx';
import MiApi from './Componentes/MiApi.jsx';
import Footer from './Componentes/Footer.jsx';


const App =()=> {
  return (
    <div className='d-flex justify-content-center flex-column align-items-center'>
      <div className='w-100'>
        <Header />
      </div>
      
      <div className='col-12 col-sm-10'>
        <MiApi />
      </div>
     <Footer />
    </div>

)
}



export default App
