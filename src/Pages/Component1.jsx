import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setInput } from '../Redux/Form/inputSlice'

function Component1() {
    const data=useSelector((state)=>state.data.input)
    const dispatch=useDispatch()
  return (
    <div>
      <input type='text' name='name' id='name' value={data} placeholder='NAME' onChange={(e)=>dispatch(setInput(e.target.value))}/>
      
    </div>
  )
}

export default Component1
