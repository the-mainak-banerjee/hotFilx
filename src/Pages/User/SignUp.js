import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../Store/auth-context'

function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [loading, setLoading] = useState(false)
    const [err,setErr] = useState('')
    const navigate = useNavigate()
    const { signUp } = useAuth()
    const backgroundImage = 'https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'
    


    async function handleSignUp(event) {
        event.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setErr("Password Does Not Match")
        }

        try{
            setErr('')
            setLoading(true)
            await signUp(emailRef.current.value, passwordRef.current.value)
            navigate('/home')
        }catch(error){
            setErr(error.message)
        }

        setLoading(false)
    }
    

    return(
        <section className='w-full h-screen'>
            <img
                className='block absolute w-full h-full object-cover'
                src={backgroundImage}
                alt='hotFlix-bg'
            />
            <div className='bg-gradient-to-t from-[#0c111b] to-[#0c111ba1] fixed bottom-0 w-full h-full'></div>
            <nav className='flex text-white items-center justify-between h-16 py-5 px-5 md:px-16 mt-[4px] z-100 w-full sticky top-0 z-50'>
                <Link to='/home'>
                    <h2 className="font-semibold text-3xl">
                        HotFlix
                    </h2>
                </Link>
                <Link to='/login'>
                    <h3 className='text-gray-300 text-xl mr-4 hover:underline hover:text-white'>
                        LogIn
                    </h3>
                </Link>
            </nav>
            <div className='fixed w-full px-4 py-20 z-50'>
                <div className='max-w-[450px] h-[500px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>   
                        <h1 className='text-3xl font-bold'>Sign Up</h1>
                        <form onSubmit={handleSignUp} className='w-full flex flex-col py-4'>
                            {err && <p className='bg-red-500 p-1 mt-1'>
                                {err}
                            </p>}
                            <input
                                className='p-3 my-2 bg-gray-700 rounded'
                                type='email'
                                placeholder='Email'
                                ref={emailRef}
                                required
                            />
                            <input
                                className='p-3 my-2 bg-gray-700 rounded'
                                type='password'
                                placeholder='Password'
                                ref={passwordRef}
                                minLength = '7'
                                required
                            />
                            <input
                                className='p-3 my-2 bg-gray-700 rounded'
                                type='password'
                                placeholder='Confirm Password'
                                ref={passwordConfirmRef}
                                minLength ='7'
                                required
                            />
                            <button disabled={loading} className='bg-[#1f80e0] hover:bg-[#0c549c] py-3 my-6 rounded font-bold'>
                                Sign Up
                            </button>
                            <p className='py-2'>
                                <span className='text-gray-600'>
                                    Already Have An Account?
                                </span>
                                <Link to='/login' className='hover:underline'>
                                    Log In
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SignUp