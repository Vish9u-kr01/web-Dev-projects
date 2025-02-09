import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Navbar from "./components/Navbar"
import {increment, decrement, multiply } from './redux/counter/counterslice'


function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    <Navbar/>
      <div>
        <button   onClick={() => dispatch(decrement())} >-</button>
          currently count is {count}
          <button   onClick={() => dispatch(increment())} >+</button>
      </div>

    </>
  )
}

export default App
