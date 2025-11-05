import React from 'react'
import Image from 'next/image'
const Hours = () => {
  return (
    <div className='flex flex-col w-full py-24 relative justify-center bg-black'>
        <Image src="/godziny.jpeg" alt="tlo dziecko" fill={true} objectFit='cover' className='hidden md:flex'/>
        <div className="md:pl-[45%] md:pr-8 w-full h-full text-white py-6 flex flex-col justify-center items-center md:items-stretch z-10">
            <div className='flex w-full flex-row justify-center items-center'>
                <div className={`relative w-[10%] h-10`}>
                    <Image alt="ikonka kosciol" src="/icon-1.png" fill={true} objectFit='contain '></Image>
                </div>
                <h2 className='text-white text-3xl ml-4 font-header2'>Porządek liturgiczny</h2>
            </div>
            <div className='flex flex-col md:flex-row mt-8 text-white md:justify-center px-8 md:px-0'>
                <div className='flex flex-col pb-4 md:w-1/2 md:pb-0'>
                    <h3 className='font-bold text-2xl mb-4'>Msze święte</h3>
                    <div className='flex w-full gap-10'>

                        <div className=''>
                            <h4 className='font-bold text-xl'>Dni powszednie</h4>
                            <p className='mt-4'>6:30</p>
                            <p>8:00</p>
                            <p>9:00<span className='text-[#ff0000]'>*</span></p>
                            <p>18:00</p>
                        </div>
                        <div className=''>
                            <h4 className='font-bold text-xl'>Niedziele i Święta</h4>
                            <p className='mt-4'>7:00<span className='text-[#ff0000]'>*</span></p>
                            <p>8:30</p>
                            <p>10:00</p>
                            <p>11:30 (rodzinna)</p>
                            <p>13:00</p>
                            <p>18:00</p>
                        </div>
                    </div>
                    <div className='mt-4 md:hidden'>
                        <p className='mt-2 text-base text-[#ff0000]'>UWAGA! W okresie wakacyjnym, <span className='underline'>nie ma</span> mszy o 9:00 w dni powszednie oraz o 7:00 w Niedziele i Święta.</p>
                    </div>
                </div>
                
                <div className='md:pl-4 md:w-1/2 md:border-l-[2px] mt-4 md:mt-0 md:ml-4'>
                    <h3 className='font-bold text-2xl mb-4'>Spowiedź</h3>
                    <p className='mt-4'>Dni powszednie: 30 min. przed Mszą Św.</p>
                    <p className='mt-4'>Sobota: 16:00-18:00 w dolnym kościele</p>
                    <p className='mt-4'>Niedziela: 8:00-13:00 w dolnym kościele</p>
                </div>
            </div>
            <div className='hidden md:inline-block mt-4'>
                <p className='mt-2 text-base text-[#ff0000]'>UWAGA! W okresie wakacyjnym, <span className='underline'>nie ma</span> mszy o 9:00 w dni powszednie oraz o 7:00 w Niedziele i Święta.</p>
            </div>
            
        </div>
    </div>
  )
}

export default Hours