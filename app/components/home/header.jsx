import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <div className={`w-full h-screen flex relative `}>
        <Image src="/teren_parafii.jpeg" alt="zdjecie kosciola" fill={true} objectFit='cover' ></Image>
        <div className='absolute top-[30%] left-[10vw] md:left-[11%] text-white w-[80vw]'>
          <h1 className='text-6xl md:text-8xl font-header2'>Parafia Św. </h1>
          <h1 className='text-6xl md:text-8xl font-header2'>Andrzeja Apostoła</h1>
          <h1 className='text-4xl md:text-6xl font-header2 mt-14'>Jedna z najstarszych parafii w Warszawie</h1>
        </div>
    </div>
  )
}

export default Header
