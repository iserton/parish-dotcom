import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col justify-between w-full px-[5vw]  bg-dark text-white items-center py-[5vh]'>
         <h2 className='text-[5.5vh] font-header2 text-center'>Informacje kontaktowe</h2>
        <div className='flex flex-col md:flex-row w-full justify-between items-center mt-[5vh]'>
        <div className='w-full md:w-[40%] flex flex-col'>
          <p className='text-white text-[1.7vh]'>Osoby pragnące skorzystać z różnych form pomocy PZC, jak i osoby pragnące służyć swoją pomocą, proszone są o zgłaszanie do diakona Cezarego Uszyńskiego:</p>
          <p className='text-white text-[1.7vh] mt-[1vh]'>- tel. 605 074 413 (dostępny stale, w razie nieodebrania oddzwania)</p>
          <p className='text-white text-[1.7vh]'>- osobiście w Diakonii na plebanii w poniedziałki w godz. 15 30 – 17 30</p>
        </div>
        <div className='w-full md:w-[40%] mt-[3vh] md:mt-0 flex flex-col'>
          <p className='text-white text-[1.7vh]'>Miłosierdzie okazywane ubogim, chorym, starszym i samotnym w ramach parafialnej Caritas, to szansa dla każdej i każdego z nas praktykowania miłości bliźniego, stanowiącej zasadę naszej Wiary. Konkretne czyny są naszą odpowiedzią na przykazanie miłości bliźniego. Świadczą o naszej dojrzałości chrześcijańskiej.</p>
          <p className='text-white text-[1.7vh] mt-[1vh]'>- wrzucając karteczkę ze swoim numerem telefonu do skarbony przy Św. Janie Pawle II w kościele</p>
        </div>
        </div>
    </div>
  )
}

export default Banner