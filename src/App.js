import React, { useState } from 'react'
import reactLogo from './logo.svg';
import testLogo from './Hive Logo.png'
import './App.css';

function App() {
  const [logo, setLogo] = useState(reactLogo)

  function handleChange () {
    if (logo === reactLogo) {
      setLogo(testLogo)
    } else {
      setLogo(reactLogo)
    }
  }

  return (
    // remove className to swtich to styled-components
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hive App
        </p>
        <button onClick={handleChange}>Enter</button>
      </header>
    </div>
  );
}

export default App;
