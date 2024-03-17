import React from 'react'
import { Link } from 'react-router-dom'

export const Navigations = () => {
  return (
    <nav className='flex h-[50px] justify-around items-center py-4 bg-gradient-to-r list-none from-blue-500 to-purple-500 text-white'>
          
        <Link to={"/"}>
            <li>
                <a href="/" className='hover:text-yellow-500 uppercase text-xl'>About</a>
            </li>
        </Link>
        <Link to={"/products"}>
            <li>
                <a href="/products" className='hover:text-yellow-500 uppercase text-xl'>Products</a>
            </li>
        </Link>
          
        
</nav>
  )
}
