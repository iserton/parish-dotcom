import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Intro = () => {
  return (
    <div className='flex flex-col md:flex-row w-full bg-white'>
        <div className='flex w-full md:w-1/2 py-[10vh] flex-col justify-center pl-[5vw]'>
            <p className='text-black text-[2.5vh] font-bold'>O parafii</p>
            <h2 className='text-[5.5vh] mt-[3vh] text-black font-header2'>Parafia której pragniemy</h2>
            <div className='flex md:hidden h-[30vh] w-full md:w-1/2  relative'>
              <Image src="/parafia_szkic_no_bg_2.png" href="kontru kosciola" objectFit="cover" fill alt="historyczne zdjecie kosciola" />
              
            </div>
            <p className='text-black text-[1.8vh] mt-[3vh]'>Parafia to dom wszystkich, to namiot Boga ustawiony pośród zwyczajnych ludzi, brama, która otwarta jest dla każdego. </p>
            <p className='text-black text-[1.8vh] mt-[1vh]'>Parafia ma być wspólnotą otwartą, w której każdy czuje się jak w domu, w której jest miejsce dla wszystkich, w której nikt nie zachowuje się jak pan i władca (bo posiadł tajemnicę).</p>
            <p className='text-black text-[1.8vh] mt-[1vh]'>Widzę parafię jako wspólnotę, w której każdy należący do niej powinien czuć się jak we własnym domu. Parafia ma być właśnie takim domem, który wypełnia wielka rodzina dzieci, młodzieży, dorosłych i osób starszych.</p>

            <p className='text-black text-[3vh] font-header2 mt-[2vh]'>ks. dr L. Slipek</p>
            
            <Link href="/parafia/kosciol"><button className='p-4  bg-dark text-white mt-[2vh] md:mt-[3vh]'>Zobacz więcej</button></Link>
        </div>
        <div className='hidden md:flex w-full w-1/2  relative'>
            <Image src="/parafia_szkic_no_bg_2.png" href="kontru kosciola" objectFit="cover" fill alt="historyczne zdjecie kosciola"/>
            {/* <p className='absolute right-10 bottom-10 text-black text-[1.8vh] z-20'>Projekt przebudowy kościoła wg A. Idzikowskiego</p> */}
        </div>
    </div>
  )
}

export default Intro