import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <header>
        <nav className='p-8 bg-[#2f2f2f] border-l-4 border-green-400 flex items-center justify-between'>
            <h1 className='text-xl text-[#e4e4e4] font-bold'> 
                <Link href='/'>
                    <span className='text-green-400 text-2xl'>IN</span>vest
                </Link>
            </h1>
            <ul className='uppercase flex items-center justify-around text-[#e4e4e4] w-1/5 text-sm cursor-pointer'>
                <li>
                    <Link href='/create'>
                        create coin 
                    </Link> 
                </li>
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
            </ul>
        </nav>
    </header>
  )
}

export default NavBar