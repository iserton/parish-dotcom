import React from 'react'
import Image from 'next/image'
const Gallery = () => {
  return (
    <div className='w-full px-[5vw] grid grid-cols-1 md:grid-cols-2 h-[100vh] md:h-[90vh] py-[10vh] gap-4 bg-white'>
        <div className='relative h-full w-full'>
            <Image src="/min1.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
        </div>
        <div className='grid grid-cols-2 h-full gap-4'>
            <div className='relative'>
                <Image src="/min2.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
            </div>
            <div className='relative h-full w-full'>
                <Image src="/min3.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
            </div>
            <div className='relative h-full w-full'>
                <Image src="/min4.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
            </div>
            <div className='relative h-full w-full'>
                <Image src="/min5.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
            </div>

        </div>
    </div>
  )
}

export default Gallery