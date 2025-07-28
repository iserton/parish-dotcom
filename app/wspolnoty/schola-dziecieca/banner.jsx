import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    // <div className='flex flex-col justify-between w-full px-[5vw]  bg-dark text-white items-center py-[5vh]'>
    //      {/* <h2 className='text-[5.5vh] font-header2 text-center'>A na „szkole” śpiewania od kuchni…</h2>
    //     <div className='flex flex-col md:flex-row w-full justify-between items-center mt-[5vh]'>
    //     <div className='w-full md:w-[40%] flex flex-col'>
    //       <p className='text-white text-[1.7vh]'>Przed:</p>
    //       <p className='text-white text-[1.7vh] mt-[1vh]'>- przychodzimy punktualnie, chyba, że ktoś lubi przysiady …</p>
    //       <p className='text-white text-[1.7vh]'>- zawsze mamy przy sobie nasz własnej produkcji śpiewnik : „Śpiewam, więc jestem”</p>
    //     </div>
    //     <div className='w-full md:w-[40%] mt-[3vh] md:mt-0 flex flex-col'>
    //       <p className='text-white text-[1.7vh]'>W trakcie:</p>
    //       <p className='text-white text-[1.7vh] mt-[1vh]'>- cierpliwie słuchamy Wujka </p>
    //       <p className='text-white text-[1.7vh] mt-[1vh]'>- angażujemy się ile sił w ćwiczenia – u nas każdy głos jest najważniejszy</p>
    //       <p className='text-white text-[1.7vh] mt-[1vh]'>- nie mamy granic wiekowych, a przykład starszych wspomaga młodszych w śpiewaniu</p>
    //     </div> */}
    //     <h2 className='text-[5.5vh] font-header2 text-center mt-[2vh]'>Informacje kontaktowe</h2>
    //     <div className='flex flex-col md:flex-row w-full justify-between items-center mt-[5vh]'>
    //       <div className='w-full md:w-1/2 '>
    //         <p className='text-white text-[1.7vh] mt-[1vh]'>„Spotkania odbywają się w każdą niedzielę przed rodzinną Mszą Św., o godzinie 10:27, w salce na plebanii, domofon nr 9.</p>
    //       </div>
    //       <div className='w-full md:w-1/2'>
    //         <p className='text-white text-[1.7vh] mt-[1vh]'>KONTAKT: Janusz Piechocki tel. +48 530 539 082</p>
    //       </div>
    //     </div>
    // </div>

    <div className='flex flex-col justify-between w-full px-[5vw]  bg-dark text-white items-center py-[5vh]'>
      <h2 className='text-[5.5vh] font-header2 text-center'>Informacje kontaktowe</h2>
      <div className='flex flex-col md:flex-row w-full justify-between items-center mt-[5vh]'>
        <div className='w-full md:w-[40%] flex flex-col'>
          <p className='text-white text-[1.7vh]'>Spotkania odbywają się w każdą niedzielę przed rodzinną Mszą Św., o godzinie 10:27, w salce na plebanii, domofon nr 9.</p>
        </div>
        <div className='w-full md:w-[40%] mt-[3vh] md:mt-0 flex flex-col'>
          <p className='text-white text-[1.7vh]'>KONTAKT: Janusz Piechocki tel. +48 530 539 082</p>
        </div>
      </div>
    </div>
  )
}

export default Banner