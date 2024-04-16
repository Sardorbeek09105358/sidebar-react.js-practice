import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Photos from '../Photos/photos'
import Todos from '../single/Todos'
import Users from '../Users/Users'

const Navbar = () => {
  return (
    <div>
        <div>
          <Routes>
            <Route path='/' element={<Users />} />
            <Route path='/Todos/:id' element={<Todos />} />
            <Route path='/photos' element={<Photos />} />
          </Routes>
        </div>
    </div>
  )
}

export default Navbar
