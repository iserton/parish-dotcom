import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className='w-full md:h-[35vh] grid grid-cols-2 md:grid-cols-5 justify-items-center bg-white py-[10vh] h-[45vh]'>
        <div className='w-3/5 h-full relative'>
            <a href="https://katolik.pl">
                <Image src="/katolik.png" alt="logo serwis katolicki" fill objectFit='contain'/>
            </a>
        </div>
        <div className='w-3/5 h-full relative'>
            <a href="https://deon.pl">
                <Image src="/deon.png" alt="logo serwis katolicki" fill objectFit='contain'/>
            </a>
        </div>
        <div className='w-3/5 h-full relative'>
            <a href="https://ekai.pl">
                <Image src="/ekai.png" alt="logo serwis katolicki" fill objectFit='contain'/>
            </a>
        </div>
        <div className='w-3/5 h-full relative'>
            <a href="https://radiomaryja.pl">
                <Image src="/radio_maryja.png" alt="logo serwis katolicki" fill objectFit='contain'/>
            </a>
        </div>
        <div className='w-3/5 h-full relative'>
            <a href="https://gosc.pl">
                <Image src="/gosc.png" alt="logo serwis katolicki" fill objectFit='contain'/>
            </a>
        </div>
    </div>
  )
}

export default Banner