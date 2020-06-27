import React, { useState } from 'react'

import CellSnapShot from './subComp/CellSnapShot'

const Feed = ({ setSelectedCell }) => {
  const [feedCells, setFeedCells] = useState(null)


// Placeholder Data
  const testCells = [
    { name: 'ETFJP',
      memberCount: 1000,
      activityCount: 10 },
    { name: 'BEN',
      memberCount: 2000,
      activityCount: 100 },
    { name: 'JPDND',
      memberCount: 50,
      activityCount: 2 },
  ]

  // useEffect()
  // make a request to the Api for the cells you belong to, in order of activity
  // setFeedCells(data from api)

  // personal feed vs public Feed

  // change testCells to feedCells when api call is working
  const userCellsJsx = testCells.map(cell => {
    return (
    <CellSnapShot setSelectedCell={setSelectedCell} cell={cell}/>
    )
  })

  return (
    <div>
      {userCellsJsx}
    </div>
  )
}

export default Feed
