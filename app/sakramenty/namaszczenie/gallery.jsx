import React from 'react'
import Image from 'next/image'
const Gallery = () => {
  return (
    <div className='w-full px-[5vw] grid grid-cols-1 md:grid-cols-2 h-[70vh] md:h-[60vh] gap-4 bg-white mb-[5vh]'>
        <div className='relative h-full w-full'>
            <Image src="/nam1.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
        </div>
        <div className='grid grid-cols-2 h-full gap-4'>
            <div className='relative'>
                <Image src="/nam2.jpg" alt="zdjecie schola" fill objectFit='cover'/>
            </div>
            <div className='relative h-full w-full'>
                <Image src="/nam3.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
            </div>
            <div className='relative h-full w-full'>
                <Image src="/nam4.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
            </div>
            <div className='relative h-full w-full'>
                <Image src="/nam5.png" alt="zdjecie schola" fill objectFit='cover'/>
            </div>

        </div>
    </div>
  )
}

export default Gallery