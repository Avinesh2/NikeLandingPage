import React from 'react'
import Button from './Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../Constants'
import { bigShoe1 } from '../assets/images'
import ShoeCard from './ShoeCard'
import { useState } from 'react';

const Hero = () => {

  const [bigShoeImg, setBigShoeImage] = useState(bigShoe1)
  return (
    <section id="home" className='w-full  p-2 flex flex-col xl:flex-row min-h-screen justify-center gap-10 max-container'>

    <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28  '>
    <p className='text-coral-red text-xl font-montserrat'>Our Summer Collections</p>
    <h1 className='mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]'>
    <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'> 
    The New Arrival
    </span>
    <br/>
    <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
    </h1>
    <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
      Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
    </p>
    <Button label="Shop Now" iconURL={arrowRight}/>

    <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 ">
    {statistics.map(stat=>(
      <div key={stat} className="flex flex-col justify-center items-center gap-2">
        <p className='font-palanquin text-4xl font-bold'>{stat.value}</p>
        <p>{stat.label}</p>
      </div>
      ))}
        
    
    </div>
    </div>

    <div className='relative flex flex-1 justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
      <img src={bigShoeImg} width={610} height={500} className='object-contain relative z-10' />
       
      <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%]'>
        {shoes.map((shoe)=>(
          <div key={shoe}>
            <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe)=>{setBigShoeImage(shoe)}} bigShoeImage={bigShoeImg}/>
          </div>
        ))}
      </div>
    </div>

    

    </section>
  )
}

export default Hero