import React, { useContext } from 'react'
import { countNumber } from './Parents'

function Children() {
  const value = useContext(countNumber)
  const handleUp = () => {
    value.setCount(pre => pre + 1)
  }
  return (
    <div>
      <h1>{value.count}</h1>
     <button onClick={handleUp}>UP</button>
    </div>
  )
}

export default Children