import React from 'react'
import { useSelector } from 'react-redux'

 const Navbar = () => {
    const count = useSelector((state) => state.counter.value)

  return (
    <div>
     I am navbar and   counter is {count}
    </div>
  )
}



