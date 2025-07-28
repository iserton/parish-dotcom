import React from 'react'

const Documents = () => {
  return (
    <div className='w-full py-[5vh] flex flex-col md:flex-row px-[5vw] bg-white'>
        <div className='w-full md:w-1/2 flex flex-col pr-[5vw] justify-center items-center md:items-start'>
            <h2 className='text-[4.5vh] font-header2'>Obowiązujące dokumenty kościelne</h2>
            <p className='mt-[3vh] '>Zapoznaj sie z aktualnymi dokumentami koscielnymi. Sa to biezace akty prawne ktore okreslaja zasady przyjecia danego sakramentu oraz towarzyszace temu przywileje oraz ograniczenia.</p>
        </div>
        <div className='h-full w-full md:w-1/2 flex flex-col justify-center'>
            <hr className='border-black  my-[2vh]'/>
            <div className='flex flex-row justify-between w-full'>
                <p className='font-bold'>IV SYNOD ARCHIDIECEZJI WARSZAWSKIEJ</p>
                <a href="" className='cursor-pointer'>Pobierz</a>
            </div>
            <hr className='border-black  my-[2vh]'/>
            <div className='flex flex-row justify-between w-full'>
                <p className='font-bold'>PRZEPISY KPK ODNOŚNIE RODZICÓW CHRZESTNYCH</p>
                <a href="" className='cursor-pointer'>Pobierz</a>
            </div>
            <hr className='border-black  my-[2vh]'/>
            <div className='flex flex-row justify-between w-full'>
                <p className='font-bold'>FUNKCJA „ŚWIADKA CHRZTU”</p>
                <a href="" className='cursor-pointer'>Pobierz</a>
            </div>
            <hr className='border-black  my-[2vh]'/>
            <div className='flex flex-row justify-between w-full'>
                <p className='font-bold'>KATECHIZM KOŚCIOŁA KATOLICKIEGO</p>
                <a href="" className='cursor-pointer'>Pobierz</a>
            </div>
            <hr className='border-black  my-[2vh]'/>
        </div>


    </div>
  )
}

export default Documents