import React, {useEffect, useState} from 'react'
import routes from './routes'
import Header from './Components/Header/Header'
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
    </div>
  );
}

export default App;
