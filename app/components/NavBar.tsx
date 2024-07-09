import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header>
        <nav className='md:p-8 p-3 bg-[#2f2f2f] border-l-4 border-green-400 flex md:flex-row flex-col items-center justify-between'>
            <h1 className='text-xl text-in-white font-bold md:mb-0 mb-5'> 
                <Link href='/'>
                    <span className='text-green-400 text-2xl'>IN</span>vest<span className='text-green-400'>.</span>
                </Link>
            </h1>
            <ul className='uppercase flex items-center justify-around text-in-white md:w-1/3 w-full text-sm cursor-pointer'>
                <li>
                    <Link href=''>
                        our team 
                    </Link> 
                </li>
                <li>
                    <Link href=''>
                        blog 
                    </Link> 
                </li>
                <li>
                    <Link href='/wallet'>
                        my wallet 
                    </Link> 
                </li>
                <li className='bg-green-400 p-3 rounded-md text-[#2f2f2f] font-bold border-b-4 border-white'>
                    <Link href='/create'>
                        Invest Now!
                    </Link> 
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar