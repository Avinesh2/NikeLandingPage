import React from 'react'
import Button from './Button'
import { shoe8 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id="about-us" className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>
    <div className='flex flex-1 flex-col'>
    
    <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
    
    We Provide you 
    <span className='text-coral-red'> Super
    </span>
    <span className='text-coral-red'> Quality </span>
     Shoes
    
    </h2>
    <p className='mt-4 lg:max-w-lg info-text'>
      Ensuring Premium comfort and style, our meticulously crafted footwear is designed to elevate your experience ,providing youw ith unmatched quality, innovation, and a touch of elegance.
    </p>
    <p className='mt-6 lg:max-w-lg info-text'>
        Our dedicaiton to detail and excellence ensures your satisfaction.
    </p>
    <div className='mt-5'>
    <Button label="View Details"/>
    </div>

    </div>
    <div>
        <img src={shoe8} width={570} height={522} className='object-contain'/>
    </div>
    
    </section>
  )
}

export default SuperQuality