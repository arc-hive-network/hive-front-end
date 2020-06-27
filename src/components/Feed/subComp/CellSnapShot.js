import React from 'react'
import { Link, Route } from 'react-router-dom'

const CellSnapShot = ({ cell, setSelectedCell }) => {

  function handleChange() {
    setSelectedCell(cell)
  }

  return (
    <div style={{border: "solid"}}>
      <p>Name: {cell.name}</p>
      <p>Member Count: {cell.memberCount}</p>
      <p>Activity Count: {cell.activityCount}</p>
      {/* /cell is CellMain is located, /cell.name has no functionality and is only there to show the user where they are*/}
      <Link to={ "/cell/" + cell.name}><button onClick={handleChange}>Enter</button></Link>
    </div>
  )
}

export default CellSnapShot
