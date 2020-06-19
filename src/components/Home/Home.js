import React, { Fragment } from 'react'
import { Route, Link } from 'react-router-dom'
import HiveMain from '../HiveMain/HiveMain'

import hiveLogo from '../../Hive Logo.png'

const Home = () => {

  return (
    <Fragment>
      <main>
      <Route exact path='/' render={() => (
        <div className="App">
          <header className="App-header">
            <img src={hiveLogo} className="App-logo" alt="logo" />
            <p>
              Hive App
            </p>
            <Link to="/Main">
              <button>Enter</button>
            </Link>
          </header>
        </div>
        )} />
          <Route exact path='/Main' render={() => (
              <HiveMain />
          )} />
        </main>
    </Fragment>
  )
}

export default Home
