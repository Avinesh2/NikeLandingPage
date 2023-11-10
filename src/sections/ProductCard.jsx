import React from 'react'
import { star } from '../assets/icons'

const ProductCard = (props) => {
  return (
    <div className='flex flex-col w-full max-sm:w-full card cursor-pointer'>
        <img src={props.imgURL} className='w-[280px] h-[280px]' />
        <div className='mt-8 flex gap-2 justify-start '>
        <img src={star} width={24} height={24}/>
        <p className='font-montserrat text-xl leading-normal '>(4.5)</p>
        
        </div>
        <h3 className='text-2xl leading-normal mt-2 font-semibold'>{props.name}</h3>
        <p className=' text-coral-red leading-normal font-montserrat'>{props.price}</p>
    </div>
  )
}

export default ProductCard