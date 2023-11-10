import React from 'react'

const Button = ({label,iconURL}) => {
  return (
    <button className='flex gap-2 bg-coral-red px-7 py-4 border font-montserrat text-lg leading-none text-white border-coral-red rounded-full'>
         {label}
        { iconURL&&<img src={iconURL} className='rounded-full w-5 h-5'/>}
    </button>
  )
}

export default Button