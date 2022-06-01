import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../Components/UI/Navbar'
import { useAuth } from '../../Store/auth-context'

function ChangePassword() {

    const passwordRef = useRef()
    const [err, setErr] = useState('')
    const [message, setMessage] = useState('')
    const [loading,setLoading] = useState(false)
    const navigate = useNavigate()
    const { changePassword } = useAuth()
    const backgroundImage = 'https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'


    async function handlePasswordChange(event) {
        event.preventDefault()

        try{
            setErr('')
            setLoading(true)
            await changePassword(passwordRef.current.value)
            setMessage('Password Changed Successfully, Redirecting To Account Page...')
            setTimeout(() => {
                navigate('/account')
            },4000)
        }catch(error){
            setErr('Please Login Again To Change Your Password')
        }
        setLoading(false)
    }


    return(
        <section className='w-full h-screen'>
            <img
                className='block absolute w-full h-full object-cover'
                src={backgroundImage}
                alt='netflix-bg'
            />
            <div className='bg-gradient-to-t from-[#0c111b] to-[#0c111ba1] fixed bottom-0 w-full h-full'></div>
            <Navbar />
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[400px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>   
                        <h1 className='text-3xl font-bold'>
                            Change Password
                        </h1>
                        <p className='text-xl text-gray-500'>Enter Your New Password Below</p>
                        {message && <div className='w-full flex flex-col py-4'><p className='bg-gray-500 p-1 mt-1'>{message}</p></div>}
                        {!message && <form onSubmit={handlePasswordChange} className='w-full flex flex-col py-4'>
                            {err && <p className='bg-red-500 p-1 mt-1'>{err}</p>}
                            <input
                                className='p-3 my-2 bg-gray-700 rounded'
                                type='password'
                                placeholder='New Password'
                                ref={passwordRef}
                                required
                            />
                            <button disabled={loading} className='bg-[#1f80e0] hover:bg-[#0c549c] py-3 my-6 rounded font-bold'>
                                Update Password
                            </button>
                            <p className='py-4'>
                                <span className='text-gray-600'>Get Back To</span>{' '}
                                <Link to='/account' className='hover:underline'>Account Page</Link>
                            </p>
                        </form>}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ChangePassword