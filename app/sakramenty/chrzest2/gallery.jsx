import React from 'react'
import Image from 'next/image'
const Gallery = () => {
  return (
    <div className='w-full px-[5vw] grid grid-cols-1 md:grid-cols-2 h-[70vh] md:h-[60vh] gap-4 bg-white'>
        <div className='relative h-full w-full'>
            <Image src="/chrzest_gallery1.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
        </div>
        <div className='grid grid-cols-2 h-full gap-4'>
            <div className='relative'>
                <Image src="/chrzest_gallery2.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
            </div>
            <div className='relative h-full w-full'>
                <Image src="/chrzest_gallery3.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
            </div>
            <div className='relative h-full w-full'>
                <Image src="/chrzest_gallery4.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
            </div>
            <div className='relative h-full w-full'>
                <Image src="/chrzest_gallery5.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
            </div>

        </div>
    </div>
  )
}

export default Gallery