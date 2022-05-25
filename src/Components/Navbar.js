import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineSearch, AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { MdPersonalVideo, MdOutlineMovie } from 'react-icons/md'

function Navbar() {
  return (
    <>
       <nav className="hidden md:flex text-white items-center justify-between h-16 py-12 px-16 mt-[6px]">
            <Link to='/'>
                <h2 className="font-semibold text-2xl">HotFlix</h2>
            </Link>
            <div className="flex items-center text-gray-300">
                <div className='mr-4'>
                    <input type="search" placeholder='Search' autocomplete="off" className="bg-inherit border-0 border-b-2 pl-1 focus:w-[250px] focus:border-0"/>
                    <AiOutlineSearch className="absolute top-12 right-[345px]"/>
                </div>
                <Link to='/' className="mr-4">
                    <h4>TV</h4>
                </Link>
                <Link to='/' className="mr-4">
                    <h4>Movies</h4>
                </Link>
                <Link to='/' className="mr-4">
                    <h4>LogIn</h4>
                </Link>
                <Link to='/' className="mr-4">
                    <button className='bg-[#1f80e0] px-5 py-1 rounded text-white font-bold'>SignUp</button>
                </Link>
            </div>
        </nav>

        <nav className='md:hidden'>
            <div className="flex text-white items-center justify-between h-16 p-5 mt-[6px] ">  
                <div className='flex items-center'> 
                    <h2 className="font-semibold text-2xl mr-5">HotFlix</h2>
                    <Link to='/' className="mr-4">
                        <button className='bg-[#1f80e0] px-5 py-1 rounded text-white font-bold'>SignUp</button>
                    </Link>
                </div>
                <AiOutlineSearch />
            </div>
            <div className='bg-[#0C111B] text-white flex items-center z-10 pt-1 fixed bottom-[10px] w-[100%]'>
                <Link to='/' className="mx-10 flex-col">
                    <AiOutlineHome className='ml-[13px]'/>
                    <h4>Home</h4>
                </Link>
                <Link to='/' className="mr-10 flex-col">
                    <MdPersonalVideo className='ml-[2px]'/>
                    <h4>TV</h4>
                </Link>
                <Link to='/' className="mr-10 flex-col">
                    <MdOutlineMovie className='ml-[15px]'/>
                    <h4>Movies</h4>
                </Link>
                <Link to='/' className="mr-4 flex-col">
                    <AiOutlineUser className='ml-[12px]'/>
                    <h4>LogIn</h4>
                </Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar
