import React, { useState } from 'react'
import Header from '../shared/Header'
import { Route } from 'react-router-dom'
import MyAccount from '../MyAccount/MyAccount'

// Sub Components
import CreateCell from './subComp/CreateCell/CreateCell'
import Feed from '../Feed/Feed.js'
import CellMain from '../CellMain/CellMain.js'

const HiveMain = () => {
  // The cell that is or was last being viewed
  const [selectedCell, setSelectedCell] = useState({})

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
          <Feed setSelectedCell={setSelectedCell}/>
        )} />
        <Route path='/cell' render={() => (
          <CellMain selectedCell={selectedCell}/>
        )} />
      </main>
    </div>
  )
}

export default HiveMain
