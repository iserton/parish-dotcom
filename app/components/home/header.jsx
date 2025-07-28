import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <div className={`w-full h-screen flex relative `}>
        <Image src="/teren_parafii.jpeg" alt="zdjecie kosciola" fill={true} objectFit='cover' ></Image>
        <div className='absolute top-[30%] left-[10vw] md:left-[11%] text-white w-[80vw]'>

        <h1 className='text-[6vh] md:text-[8.5vh] text-white font-header2'>Parafia Św. </h1>
        <h1 className='text-[6vh] md:text-[8.5vh] text-white font-header2'>Andrzeja Apostoła</h1>
        <h1 className='text-[4.5vh] md:text-[5.5vh] font-header2 text-white mt-[5vh]'>Jedna z najstarszych parafii w Warszawie</h1>
        {/* <h1 className='text-[5.5vh] font-header2 '>Parafii w Warszawie</h1> */}
            
            {/* <h1 className='text-[70px] font-header2'>Andrzeja Apostoła</h1> */}
            {/* <p className='mt-[4vh]'>Najstarsza parafia w centrum warszawy. jedna z wielu blah blah lorem ipsum dolores.Najstarsza parafia w centrum warszawy. jedna z wielu blah blah lorem ipsum dolores.Najstarsza parafia w centrum warszawy. jedna z wielu blah blah lorem ipsum dolores. </p> */}
            {/* <h1 className='text-[70px] font-header2 mt-[10vh]'>Jedna z Najstarszych Parafii w Warszawie</h1> */}
        </div>
    </div>
  )
}

export default Header
