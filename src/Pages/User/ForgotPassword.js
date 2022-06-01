import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Store/auth-context'

function LogIn() {

    const emailRef = useRef()
    const [err, setErr] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()
    const { forgotPassword } = useAuth()
    const backgroundImage = 'https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'


    async function handleForgotPassword(event) {
        event.preventDefault()

        try{
            setErr('')
            await forgotPassword(emailRef.current.value)
            setMessage('Email Send Successfully. Please Check Spam Folder Also')
            setTimeout(() => {
                navigate('/login')
            },4000)
        }catch(error){
            setErr(error.message)
        }
    }


    return(
        <section className='w-full h-screen'>
            <img
                className='block absolute w-full h-full object-cover'
                src={backgroundImage}
                alt='netflix-bg'
            />
            <div className='bg-gradient-to-t from-[#0c111b] to-[#0c111ba1] fixed bottom-0 w-full h-full'></div>
            <nav className='flex text-white items-center justify-between h-16 py-5 px-5 md:px-16 mt-[4px] z-100 w-full sticky top-0 z-50'>
                <Link to='/home'>
                    <h2 className="font-semibold text-3xl">HotFlix</h2>
                </Link>
                <Link to='/login'>
                    <h3 className='text-gray-300 text-xl mr-4 hover:underline hover:text-white'>LogIn</h3>
                </Link>
            </nav>
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>   
                        <h1 className='text-xl font-bold'>
                            Enter Your Registered Email
                        </h1>
                        <p className='text-[12px] text-gray-500'>We will send you an email with reset password Link</p>
                        {message && <div className='w-full flex flex-col py-4'><p className='bg-gray-500 p-1 mt-1'>{message}</p></div>}
                        {!message && <form onSubmit={handleForgotPassword} className='w-full flex flex-col py-4'>
                            {err && <p className='bg-red-500 p-1 mt-1'>{err}</p>}
                            <input
                                className='p-3 my-2 bg-gray-700 rounded'
                                type='email'
                                placeholder='Email'
                                ref={emailRef}
                                required
                            />
                            <button className='bg-[#1f80e0] hover:bg-[#0c549c] py-3 my-6 rounded font-bold'>
                                Reset Password
                            </button>
                            <div className='flex justify-between items-center text-sm'>
                                <p className='py-8'>
                                    <span className='text-gray-600'>New To HotFlix?</span>{' '}
                                    <Link to='/signup' className='hover:underline'>Sign Up</Link>
                                </p>
                                <Link to='/login' className='hover:underline'>Back To Login</Link>
                            </div>
                            {/* <p className='py-8'>
                                <span className='text-gray-600'>New To HotFlix?</span>{' '}
                                <Link to='/signup' className='hover:underline'>Sign Up</Link>
                            </p> */}
                        </form>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LogIn