import React, { useState } from 'react'
import './App.css'
import Home from './components/Home/Home'

function App() {
  const [user, setUser] = useState(null)

  return (
    <Home user={user} setUser={setUser}/>
  )
}

export default App;
