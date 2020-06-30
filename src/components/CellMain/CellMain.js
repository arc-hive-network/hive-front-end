import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'


// the page that shows when looking at a cell
// all internal information changes when the selectedCell states changes

const CellMain = ({ selectedCell }) => {

  return (
    <div>
      {selectedCell.name}
    </div>
  )
}

export default CellMain
