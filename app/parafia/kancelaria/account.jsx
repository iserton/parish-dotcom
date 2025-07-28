import React from 'react'

const Account = () => {
  return (
    <div className='w-full  bg-dark flex flex-col md:flex-row justify-between items-center text-white px-[5vw] py-[10vh]'>
        <h2 className='text-[5.5vh] font-header2 md:w-[40%]'>Dane Bankowe</h2>
        <div className='md:w-[40%] mt-[5vh] md:mt-0'>
        <p className='text-[1.7vh]'>Bank Pekao SA XIII Oddział w Warszawie</p>
        <p className='mt-[1vh] text-[1.7vh]'>Warszawa, ul. Górczewska 137</p>
        <p className='mt-[1vh] text-[1.7vh]'>Nr konta: 95 1240 2034 1111 0000 0306 9677</p>
        </div>

    </div>
  )
}

export default Account