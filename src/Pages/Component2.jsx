import React from 'react'
import { useSelector } from 'react-redux'

function Component2() {
    const data =useSelector((state)=>state.data.input)
  return (
    <div>
      <p>{data}</p>
    </div>
  )
}

export default Component2
