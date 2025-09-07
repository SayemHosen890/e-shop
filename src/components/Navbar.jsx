import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-white shadow-md'>
        <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
            <div className='text-lg font-bold'>
                <Link to="/">E-Shop</Link>
            </div>
            <div className='relative flex-1 mx-4'>
                <form className='flex items-center'>
                    <input type="text" placeholder='Search Product' className='border border-gray-200 rounded-sm w-full py-2 px-4'/>
                    <FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
                </form>
            </div>
            <div className='flex gap-4 items-center'>
                <Link to="/cart">
                    <FaShoppingCart className='text-lg'></FaShoppingCart>
                </Link>
                <button className='hidden md:block'>Login | Register</button>
                <button className='block md:hidden'>
                    <FaUser></FaUser>
                </button>
            </div>
        </div>
        <div className='flex justify-center items-center space-x-14 py-4 text-md font-bold'>
            <Link to="/home" className='hover:underline'>Home</Link>
            <Link to="/shop" className='hover:underline'>Shop</Link>
            <Link to="/contact" className='hover:underline'>Contact</Link>
            <Link to="/about" className='hover:underline'>About</Link>
        </div>
    </nav>
  )
}

export default Navbar