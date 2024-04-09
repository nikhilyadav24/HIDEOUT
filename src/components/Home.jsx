import React, { useState , useEffect } from 'react'
import { Link } from 'react-router-dom'

import Hero from './Hero'
import HeadlineCards from './HeadlineCards'
import Feature from './Features'
// import Shared from './Shared'
import { data } from '../data/data.js';


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const [place] = useState(data);
  return (
    <>
        <Hero />
        <HeadlineCards />

        <div className='max-w-[1640px] m-auto px-4 py-12'>
                <h1 className='text-primary font-bold text-4xl text-center'>
                    Top Rated Places
                </h1>

                <div className=''>
                <Link to={"/places"}><button class="flex text-sm rounded-full items-center border-2 border-primary px-4 py-1 font-medium text-primary transition-all hover:bg-primary hover:text-white disabled:bg-gray-300 ">
                    <span>More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    </button></Link>
                </div>

            <div className='grid  lg:grid-cols-3 gap-10 pt-10'>
            {place.slice(0,6).map((item, index) => (
            <div
                key={index}
                className='border shadow-lg rounded-lg hover:scale-105 duration-300'
            >
                <img
                src={item.image}
                alt={item.name}
                className='w-full h-[300px] object-cover rounded-t-lg'
                />
                <div className='flex justify-between px-2 py-4'>
                <p className='font-bold'>{item.name}</p>
                <p>
                    <span className='bg-primary text-white p-1 rounded-full'>
                    {item.price}
                    </span>
                </p>
                </div>
                <div className='flex justify-between px-4 py-4'>
                <p className='font'>{item.description}</p>
                </div>
            </div>
            ))}
        </div>
    </div>


        <Feature />
        

        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-primary font-bold text-4xl text-center'>
            Top Shared Places/Stories
            </h1>

            <div className=''>
                <Link to={"/shared"}><button class="flex text-sm rounded-full items-center border-2 border-primary px-4 py-1 font-medium text-primary transition-all hover:bg-primary hover:text-white disabled:bg-gray-300 ">
                    <span>More</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                    </button></Link>
                </div>

            <div className='grid  lg:grid-cols-3 gap-10 pt-10'>
                {place.slice(0,5).map((item, index) => (
                <div
                    key={index}
                    className='border shadow-lg rounded-lg hover:scale-105 duration-300'
                >
                    <img
                    src={item.image}
                    alt={item.name}
                    className='w-full h-[300px] object-cover rounded-t-lg'
                    />
                    <div className='flex justify-between px-2 py-4'>
                    <p className='font-bold'>{item.name}</p>
                    <p>
                        <span className='bg-primary text-white p-1 rounded-full'>
                        {item.price}
                        </span>
                    </p>
                    </div>
                    <div className='flex justify-between px-4 py-4'>
                    <p className='font'>{item.description}</p>
                    </div>
                </div>
                ))}
            </div>
        </div>

    </>
  )
}

export default Home