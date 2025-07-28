import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex flex-col w-full h-screen'>
        <div className='w-full h-[80%] relative'>
            <Image alt="tlo header chrzest" fill objectFit='cover' src="/bierz0.jpeg"/>
        </div>
        <div className='bg-white w-full h-[20%] flex flex-row px-[5vw] pb-[3vh] pt-[1vh] items-center justify-between'>
            <h1 className='text-[65px] font-header2'>Duch tchnie również dzisiaj</h1>
            <div className='w-[50%] h-full flex flex-col justify-center'>
                <p>&ldquo;Całe dobro pochodzi od Ojca przez Syna, a dociera do nas dzięki Duchowi Świętemu&rdquo; (św. Bazyli)</p>
                <a href="#first">
                  <button className='bg-dark text-white px-4 py-3 w-[20%] mt-[2vh]'>Zobacz więcej</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Header