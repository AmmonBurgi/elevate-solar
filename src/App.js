import React, {useEffect, useState} from 'react'
import routes from './routes'
import {withRouter} from 'react-router-dom'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import './App.css';

function App(){
  const [fadeToggle, setFadeToggle] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeToggle(true)
    }, 100);
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="App">
      <Header />
      <div className={fadeToggle === false ? 'zero' : 'app-component'}>
        {routes}
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(App);
