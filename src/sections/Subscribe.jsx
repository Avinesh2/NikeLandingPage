import React from 'react'
import Button from './Button'

const Subscribe = () => {
  return (
    <section className='max-container flex justify-between items-center max-lg:flex-col gap-10' id='contact-us'>
    <h3 className='font-palanquin font-bold text-4xl'>Sign Up for <span className='text-coral-red'>Updates</span> and Newsletter</h3>
    <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border rounded-full'>
        <input type='text' placeholder='Join Now' className='input' />
        <div>
          <Button label='Sign Up' />
        </div>
    </div>
    </section>
  )
}

export default Subscribe