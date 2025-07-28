import React from 'react'

const Streets = () => {
  return (
    <div className='w-full py-[5vh] flex px-[5vw] flex-col bg-white text-black items-center'>
        <h2 className='text-[4.5vh] font-header2 text-center'>Wyszczególnione Ulice Wraz z Numerami</h2>
        <div className='grid grid-cols-1 md:grid-cols-1  gap-[5vw] mt-[3vh]'>
            <div className='flex flex-col items-start text-[1.7vh]'>
                <p>AL. JANA PAWŁA II — 26,32, 36, 36a,</p>
                <p>BIAŁA —</p>
                <p>CHŁODNA — 2/18, 20, 22, 9, 11, 15, 25, 27, 29, 34, 36/46, 41</p>
                <p>CIEPŁA —</p>
                <p>ELEKTORALNA — 8/10, 12a, 14, 14a, 14b, 16/2217, 17a, 17c, 19, 19a, 19b, 21, 23, 24, 26,
28</p>
                <p>GRZYBOWSKA — 2, 4, 6/10, 16/22, 30, 46</p>

                <p>KOTLARSKA —</p>
                <p>KROCHMALNA — 2, 3, 4/28, 30, 45/47, 46, 55, 57</p>
                <p>ORLA — 3, 5, 7/9</p>
                <p>OGRODOWA — 1a, 3, 3a, 5, 7, 8, 9, 11, 10/26, 13/29, 26a, 32, 39/41, 42/44, 43, 49, 51, 53,
55, 65, 67</p>
                <p>PLAC MIROWSKI — 10, 12, 14</p>
                <p>WALICÓW — 17, 19, 20</p>
                <p>WRONIA — 43, 45a, 47, 50, 52 ?</p>
                <p>ŻELAZNA — 58/62, 64, 66, 67, 69, 71, 74, 75, 76, 76a, 81, 82/84, 83/85</p>
                
            </div>
            {/* <div className='flex flex-col items-start text-[1.7vh]'>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>

                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
            </div>
            <div className='flex flex-col items-start text-[1.7vh]'>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>

                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
            </div>
            <div className='flex flex-col items-start text-[1.7vh]'>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>

                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
            </div>
            <div className='flex flex-col items-start text-[1.7vh]'>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>

                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
                <p>Chłodna 1-50</p>
                <p>Solidarności 23-180</p>
            </div> */}
        </div>
    </div>
  )
}

export default Streets