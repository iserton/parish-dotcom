import React from 'react'

const Oldest = () => {
  return (
    <div className='w-full flex flex-col md:flex-row px-[5vw] my-[5vh]'>
        <div className='w-full md:w-1/2 h-full pr-[5vw]'>
            <h2 className='text-[4.5vh] font-header2'>Jedna z najstarszych parafii w Warszawie</h2>
            <p className='mt-[2vh]'>Parafia św. Andrzeja Apostoła jest czwartą najstarszą parafią w Warszawie. Erygowana w roku 1774 swą pierwszą siedzibę miała w kościele św. Andrzeja Apostoła przy pl. Teatralnym, a następnie w kościele oo. Reformatów przy ul. Senatorskiej. W związku z bujnym rozwojem terenów miasta na zachód od pl. Bankowego postanowiono o ufundowaniu nowej świątyni na terenie ówczesnego pl. Pod Lwem, położonego między ulicami Chłodną i Elektoralną.</p>
        </div>
        <div className='w-full md:w-1/2 h-full '>
            
            <div className='w-full hidden md:flex flex-col md:flex-row justify-between'>
                <div className='mt-[2vh]'>
                    <p className='text-[4.5vh] font-header2'>1774</p>
                    <p className='text-[4.5vh] font-header2'>Rok Fundacyjny</p>
                </div>
                <div>
                    <p className='text-[4.5vh] font-header2'>20</p>
                    <p className='text-[4.5vh] font-header2'>Liczba Proboszczy</p>
                </div>
            </div>
            <div className='w-full flex md:hidden flex-col md:flex-row justify-between'>
                <div className='mt-[2vh]'>
                    <p className='text-[4.5vh] text-center font-header2'>Rok Fundacyjny</p>
                    <p className='text-[7.5vh] text-center mt-[1vh] font-header2'>1738</p>
                    
                </div>
                <div>
                    <p className='text-[4.5vh] text-center font-header2 mt-[5vh]'>Liczba Proboszczy</p>
                    <p className='text-[7.5vh] text-center mt-[1vh] font-header2'>20</p>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Oldest