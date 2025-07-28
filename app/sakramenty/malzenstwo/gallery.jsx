import React from 'react'
import Image from 'next/image'
const Gallery = () => {
  return (
    <div className='w-full px-[5vw] grid grid-cols-1 md:grid-cols-2 h-[75vh] md:h-[60vh] gap-4 bg-white my-[5vh]'>
        <div className='relative h-full w-full'>
            <Image src="/slub2.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
        </div>
        <div className='grid grid-cols-2 h-full gap-4'>
            <div className='relative'>
                <Image src="/slub3.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
            </div>
            <div className='relative h-full w-full'>
                <Image src="/slub4.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
            </div>
            <div className='relative h-full w-full'>
                <Image src="/slub5.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
            </div>
            <div className='relative h-full w-full'>
                <Image src="/slub6.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
            </div>

        </div>
    </div>
  )
}

export default Gallery