import React from 'react'

const Documents = () => {
  return (
    <div className='w-full h-[50vh] flex flex-row px-[5vw] bg-white'>
        <div className='h-full w-1/2 flex flex-col pr-[5vw] justify-center'>
            <h2 className='text-[4.5vh] font-header2'>Obowiazujace dokumenty koscielne</h2>
            <p className='mt-[3vh] '>Zapoznaj sie z aktualnymi dokumentami koscielnymi. Sa to biezace akty prawne ktore okreslaja zasady przyjecia danego sakramentu oraz towarzyszace temu przywileje oraz ograniczenia.</p>
        </div>
        <div className='h-full w-1/2 flex flex-col justify-center'>
            <hr className='border-black  my-[2vh]'/>
            <div className='flex flex-row justify-between w-full'>
                <p className='font-bold'>Dokument XYZ</p>
                <a>Pobierz</a>
            </div>
            <hr className='border-black  my-[2vh]'/>
            <div className='flex flex-row justify-between w-full'>
                <p className='font-bold'>Dokument XYZ</p>
                <a>Pobierz</a>
            </div>
            <hr className='border-black  my-[2vh]'/>
            <div className='flex flex-row justify-between w-full'>
                <p className='font-bold'>Dokument XYZ</p>
                <a>Pobierz</a>
            </div>
            <hr className='border-black  my-[2vh]'/>
            <div className='flex flex-row justify-between w-full'>
                <p className='font-bold'>Dokument XYZ</p>
                <a>Pobierz</a>
            </div>
            <hr className='border-black  my-[2vh]'/>
        </div>


    </div>
  )
}

export default Documents