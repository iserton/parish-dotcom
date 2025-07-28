import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex flex-col w-full h-screen'>
        <div className='w-full h-full relative'>
            <Image alt="ksiadz proboszcz kazanie" fill objectFit='cover' src="/chrzest.jpeg"/>
        </div>
        <div className='bg-white w-full flex flex-col md:flex-row px-[5vw] md:py-[2vh] pt-[0] pb-[1vh] items-start md:items-center justify-between'>
            <h1 className='text-[55px] font-header2 font-bold text-black'>Chrzest Święty</h1>
            <div className='w-full md:w-[50%] h-full flex flex-col justify-center items-start'>
                <p className='text-black text-[1.7vh]'>&ldquo;Chrzcić&rdquo; – oznacza zanurzać w wodzie. Każdy ochrzczony zostaje zanurzony w śmierci Chrystusa, z której powstaje przez zmartwychwstanie z Nim jako &ldquo;nowe stworzenie&rdquo; (2 Kor 5,17).</p>
                <a href="#first">
                  <button className='bg-dark text-white px-4 py-3 mt-[1vh]'>Zobacz więcej</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Header