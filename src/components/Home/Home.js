import React, { useState }  from 'react'
import { Route, Link } from 'react-router-dom'
import HiveMain from '../HiveMain/HiveMain'

import reactLogo from '../../logo.svg';
import testLogo from '../../Hive Logo.png'

const Home = () => {
  const [logo, setLogo] = useState(testLogo)

  function handleChange () {
    if (logo === reactLogo) {
      setLogo(testLogo)
    } else {
      setLogo(reactLogo)
    }
  }

  return (
    <div>
    <Route exact path='/' render={() => (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hive App
          </p>
        <button onClick={handleChange}>Enter</button>
        <Link to="/Main">Kane</Link>
        </header>
      </div>
      )} />
      {/* this div containsnavbar */}
        <Route exact path='/Main' render={() => (
          <div>
            <HiveMain />
          </div>
        )} />
    </div>
  )
}

export default Home
