import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import HiveMain from '../HiveMain/HiveMain'

import hiveLogo from '../../Hive Logo.png'

const Home = ({ user, setUser }) => {

  const enterPage = () => {
    setUser(true)
  }

  const landingPage = (
    <div className="App">
      <header className="App-header">
        <img src={hiveLogo} className="App-logo" alt="logo" />
        <p>
          Hive App
        </p>
          <button onClick={enterPage}>Enter</button>
      </header>
    </div>
  )

  return (
    <Fragment>
      { user ? <HiveMain /> : landingPage }
    </Fragment>
  )
}

export default Home
