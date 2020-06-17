import React, { useState } from 'react'
import { Route, Link } from 'react-router-dom'
import reactLogo from './logo.svg';
import testLogo from './Hive Logo.png'
import './App.css'
import HiveMain from './components/HiveMain/HiveMain'

function App() {
  const [logo, setLogo] = useState(testLogo)

  function handleChange () {
    if (logo === reactLogo) {
      setLogo(testLogo)
    } else {
      setLogo(reactLogo)
    }
  }

  return (
    // remove className to swtich to styled-components
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
      <Route exact path='/Main' render={() => (
              <HiveMain />
      )} />
    </div>
  );
}

export default App;
