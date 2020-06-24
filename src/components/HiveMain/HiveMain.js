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
          <div><MyAccount user={{name: 'Lorem', handle: 'lipsum', pronouns: 'they/them/theirs', email: 'lorem@ipsum.com', phone: '123-456-7890'}}/></div>
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
