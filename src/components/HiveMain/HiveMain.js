import React from 'react'
import Header from '../shared/Header'
import { Route } from 'react-router-dom'
import MyAccount from '../MyAccount/MyAccount'

// Sub Components
import CreateCell from './subComp/CreateCell/CreateCell'

const HiveMain = () => {

  return (
    <div>
      <Header />
      <main>
        <Route path='/profile' render={() => (
          <div><MyAccount /></div>
        )} />
        <Route path='/messages' render={() => (
          <div>messages</div>
        )} />
        <Route path='/createCell' render={() => (
          <CreateCell />
        )} />
        <Route path='/feed' render={() => (
          <div>feed</div>
        )} />
      </main>
    </div>
  )
}

export default HiveMain
