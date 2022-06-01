import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../Components/UI/Navbar'
import { useAuth } from '../../Store/auth-context'

function DeleteAccount() {
    const [err,setErr] = useState('')
    const navigate = useNavigate()
    const { deleteAccount } = useAuth()
    const backgroundImage = 'https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg'


    async function handleDeleteAccount() { 
        try{
            setErr('')
            await deleteAccount()
            navigate('/signup')
        }catch(error){
            setErr('Please Logout And Login Again To Delete Account')
            console.log(error)

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
            <Navbar />
            <div className='fixed w-full px-4 py-24 z-50'>
                <div className='max-w-[450px] h-[400px] mx-auto bg-black/75 text-white'>
                    <div className='max-w-[320px] mx-auto py-16'>   
                        <h1 className='text-3xl font-bold'>
                            Delete Account
                        </h1>
                        <p className='text-xl text-gray-500'>Are You Sure You Want To Delete Your Account?</p>
                        <div className='w-full flex flex-col py-4'>
                            <button onClick={handleDeleteAccount} className='bg-[#1f80e0] hover:bg-[#0c549c] py-3 my-6 rounded font-bold'>
                                Yes, Delete It
                            </button>
                            {err && <p className='bg-red-500 p-1 mt-1'>{err}</p>}
                            <p className='py-4'>
                                <span className='text-gray-600'>Don't Delete,Get Back To</span>{' '}
                                <Link to='/account' className='hover:underline'>Account Page</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DeleteAccount