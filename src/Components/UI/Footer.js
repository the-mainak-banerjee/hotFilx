import React from 'react'

function Footer() {
  return (
    <div className='bg-black text-gray-500 mt-5 md:py-10 pb-20 pt-5'>
        <div className='flex flex-col items-center text-center w-full'>
            <p>&#169; 2022 developerMainak. Alll Rights Reserved</p>
            <p>Made With <span className='text-red-600'>&hearts;</span> In India</p>
            <ul className='list-none flex justify-around'>
                <li className='px-4 cursor-pointer hover:text-white hover:underline'>
                    <a href='linkedIn.com/in/themainakb/'> 
                        LinkedIn 
                    </a>
                </li>
                <li className='px-4 cursor-pointer hover:text-white hover:underline'>
                    <a href='https://twitter.com/themainakb'> 
                        Twitter 
                    </a>
                </li>
                <li className='px-4 cursor-pointer hover:text-white hover:underline'>
                    <a href='https://github.com/the-mainak-banerjee'> 
                        Github 
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
