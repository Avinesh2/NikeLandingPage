import React from 'react'
import { headerLogo } from '../assets/images'
import {navLinks}  from '../Constants'
import { hamburger } from '../assets/icons'

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
            <img
                src={headerLogo} 
                alt='Logo'    
                width={120}
                
                />

            </a>
            <ul className='flex-1 flex justify-center justify-evenly items-center gap-16 max-lg:hidden'>
            {navLinks.map(data=>(
              <li key={data.href}>
                <a href={data.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{data.label}</a>
              </li>
            ))}

            

            </ul>
            <div className='w-5 lg:hidden cursor-pointer'>
              <img src={hamburger} />
            </div>

        </nav>
    </header>
  )
}

export default Nav;