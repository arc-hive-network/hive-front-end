import React from 'react'
import Header from '../shared/Header'
import { Route } from 'react-router-dom'

const HiveMain = () => {

  return (
    <div>
      <Header />
      <main>
        <Route path='/profile' render={() => (
          <div>profile</div>
        )} />
        <Route path='/messages' render={() => (
          <div>messages</div>
        )} />
        <Route path='/createCell' render={() => (
          <div>createCell</div>
        )} />
        <Route path='/feed' render={() => (
          <div>feed</div>
        )} />
      </main>
    </div>
  )
}

export default HiveMain
