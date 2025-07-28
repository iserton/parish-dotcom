import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex flex-col w-full h-screen'>
        <div className='w-full h-[80%] relative'>
            <Image alt="ksiadz proboszcz kazanie" fill objectFit='cover' src="/proboszcz_kazania.jpeg"/>
        </div>
        <div className='bg-white w-full h-[20%] flex flex-row px-[5vw] pb-[3vh] pt-[1vh] items-center justify-between'>
            <h1 className='text-[45px]'>Kazania Proboszcza</h1>
            <div className='w-[50%] h-full flex flex-col justify-center'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                <button className='bg-dark text-white px-4 py-3 w-[20%] mt-[2vh]'>Zobacz więcej</button>
            </div>
        </div>
    </div>
  )
}

export default Header