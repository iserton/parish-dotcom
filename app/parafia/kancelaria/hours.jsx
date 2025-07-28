import React from 'react'
import Image from 'next/image'

const Hours = () => {
  return (
    <div id="first" className='w-full h-[60vh px-[5vw] flex flex-col md:flex-row bg-white py-[10vh] items-center'>
        <div className='w-full md:w-1/2 h-[50vh] relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' alt="Godziny Otwarcia Tlo" src="/kancelariagodziny1.jpg"/>
        </div>
        <div className='w-full md:w-1/2 h-full flex flex-col justify-center'>
            <h2 className='text-[5.5vh] font-header2'>Godziny Otwarcia</h2>
            <p className='mt-[3vh] text-black text-[1.7vh]'>Czynna w poniedziałek, wtorek, czwartek i piątek
w godzinach 16:00 - 17:30 (w środę nieczynna)</p>
            <p className='mt-[1vh] text-black text-[1.7vh]'>W okresie wakacyjnym (lipiec-sierpień)
Kancelaria jest czynna: we wtorek i w piątek
w godzinach 16:00 - 17:30</p>
        </div>
        <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative mt-[2vh]'>
            <Image className='' fill objectFit='cover' alt="Godziny Otwarcia Tlo" src="/kancelariagodziny1.jpg"/>
        </div>
    </div>
  )
}

export default Hours