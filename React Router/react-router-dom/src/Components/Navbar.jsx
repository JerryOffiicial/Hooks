import React from 'react'
import{ Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex justify-between m-3 py-3 px-8 bg-blue-300 rounded-xl font-semibold '>
      <h1>Jerry</h1>
      <ul className=''>
        <Link className="hover:underline px-3" to="/">Home</Link>
        <Link className='hover:underline px-3' to="/users">Users</Link>
        <Link className='hover:underline px-3' to="/About">About</Link>
        <Link className='hover:underline px-3' to="/Contact">Contact</Link>
      </ul>
    </nav>
  )
}

export default Navbar