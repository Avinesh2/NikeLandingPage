import React from 'react'
import { footerLogo } from '../assets/images'

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href='/'>
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>Get shoes ready for the new term at your interest Nike store . Find Your perfect Size In Store. Get Rewards</p>
        </div>
        <div className='w-full flex justify-between'>
         <p className='text-white-400'>Ⓒ Copyright . All rights reserved</p>
         <p className='text-white-400 cursor-pointer'>Terms and Conditions </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer