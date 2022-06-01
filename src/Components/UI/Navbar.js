import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { MdPersonalVideo, MdOutlineMovie } from 'react-icons/md'
import { FaRegUserCircle } from 'react-icons/fa'
import { useAuth } from '../../Store/auth-context'

function Navbar() {
    const navigate = useNavigate()
    const { user, logOut } = useAuth()

    async function handleLogOut() {
        try{
            await logOut()
            navigate('/login')
        }catch(error){
            console.log(error)
        }
    }

  return (
    <>
       <nav className="hidden md:flex text-white items-center justify-between h-16 py-5 px-16 mt-[4px] z-100 w-full sticky top-0 z-50 bg-[#0C111B]">
            <Link to='/home'>
                <h2 className="font-semibold text-3xl">HotFlix</h2>
            </Link>
            <div className="flex items-center text-gray-300">
                {/* <div className='mr-4'>
                    <input type="search" placeholder='Search' autoComplete="off" className="bg-inherit border-0 border-b-2 pl-1 focus:w-[250px]"/>
                    <AiOutlineSearch className="absolute top-7 right-[345px]"/>
                </div> */}
                <NavLink to='/tv' className={(navData) => navData.isActive ? 'underline text-white nav-link' : 'nav-link'}>
                    <h4>TV</h4>
                </NavLink>
                <NavLink to='/movies' className={(navData) => navData.isActive ? 'underline text-white nav-link' : 'nav-link'}>
                    <h4>Movies</h4>
                </NavLink>
                {user?.email ? (
                    <div className='flex items-center'>
                        <h4 onClick={handleLogOut} className='nav-link cursor-pointer'>LogOut</h4>
                        <NavLink to='/account' className={(navData) => navData.isActive ? 'underline text-[16px] font-bold nav-link flex items-center' : 'nav-link text-[16px] font-bold flex items-center'}>
                            <FaRegUserCircle size='1.2rem' className='mr-1'/>
                            <h4>Account</h4>
                        </NavLink>                
                            {/* <button onClick={handleLogOut} className='nav-btn'>LogOut</button> */}
                    </div>
                ) : 
                (
                    <div className='flex items-center'>
                        <NavLink to='/login' className={(navData) => navData.isActive ? 'underline text-white nav-link' : 'nav-link'}>
                            <h4>Login</h4>
                        </NavLink>                
                        <NavLink to='/signup' className="mr-4">
                            <button className='nav-btn'>SignUp</button>
                        </NavLink>
                    </div>
                )
                }
            </div>
        </nav>

        <nav className='md:hidden'>
            <div className="flex text-white items-center justify-between h-16 p-5  z-50 w-full fixed top-0 bg-[#0C111B]">  
                <div className='flex items-center'> 
                    <h2 className="font-semibold text-2xl mr-5">HotFlix</h2>
                    {user?.email ? 
                    <button onClick={handleLogOut} className='bg-[#1f80e0] px-5 py-1 rounded text-white font-bold mr-4'>
                        LogOut
                    </button> :
                    <NavLink to='/signup' className="mr-4">
                        <button className='bg-[#1f80e0] px-5 py-1 rounded text-white font-bold '>
                            SignUp
                        </button>
                    </NavLink>}
                </div>
                {/* <AiOutlineSearch /> */}
            </div>
            <div className='bg-[#0C111B] text-white flex items-center justify-center z-50 pt-1 fixed bottom-[1px] w-[100%]'>
                <NavLink to='/home' className="mr-12 flex-col">
                    <AiOutlineHome className='ml-[13px]'/>
                    <h4>Home</h4>
                </NavLink>
                <NavLink to='/tv' className="mr-12 flex-col">
                    <MdPersonalVideo className='ml-[2px]'/>
                    <h4>TV</h4>
                </NavLink>
                <NavLink to='/movies' className="mr-12 flex-col">
                    <MdOutlineMovie className='ml-[15px]'/>
                    <h4>Movies</h4>
                </NavLink>
                {user?.email ?
                    <NavLink to='/account' className="flex-col">
                    <AiOutlineUser className='ml-[20px]'/>
                    <h4>Account</h4>
                </NavLink> : 
                <NavLink to='/login' className="flex-col">
                    <AiOutlineUser className='ml-[12px]'/>
                    <h4>LogIn</h4>
                </NavLink>}
            </div>
        </nav>
    </>
  )
}

export default Navbar
