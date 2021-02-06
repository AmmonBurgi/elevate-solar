import React, {useEffect, useState} from 'react'
import routes from './routes'
import {withRouter} from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import './App.css';

function App(){

  return (
    <div className="App">
      <Header />
      <div className='app-component'>
        {routes}
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(App);
