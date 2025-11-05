import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Intro = () => {
  return (
    <div className='flex flex-col md:flex-row w-full bg-white py-24 relative'>
        <div className='flex w-full md:w-1/2 flex-col justify-center px-[8vw] text-black'>
            <h2 className='text-2xl font-header2'>O parafii</h2>
            <h1 className='text-3xl font-bold font-header2'>Parafia której pragniemy</h1>

            <div className='flex justify-between flex-col-reverse md:flex-row items-stretch'>
              <div className=''>
                <p className='text-base mt-4'>Parafia to dom wszystkich, to namiot Boga ustawiony pośród zwyczajnych ludzi, brama, która otwarta jest dla każdego. </p>
                <p className='text-base mt-2'>Parafia ma być wspólnotą otwartą, w której każdy czuje się jak w domu, w której jest miejsce dla wszystkich, w której nikt nie zachowuje się jak pan i władca (bo posiadł tajemnicę).</p>
                <p className='text-base mt-2'>Widzę parafię jako wspólnotę, w której każdy należący do niej powinien czuć się jak we własnym domu. Parafia ma być właśnie takim domem, który wypełnia wielka rodzina dzieci, młodzieży, dorosłych i osób starszych.</p>

                <p className='text-2xl font-header2 mt-6'>ks. dr L. Slipek</p>
                
                <p>
                  <Link href="/parafia/kosciol"><button className='p-4 bg-dark text-white mt-6'>Zobacz więcej</button></Link>  
                </p>
              </div>
              <div className='flex w-full md:w-1/2 h-[40vw] md:h-full md:absolute relative right-0 top-0 h-full my-4 md:my-0'>
                <Image src="/parafia_szkic_no_bg_2.png" href="kontru kosciola" objectFit="cover" fill alt="historyczne zdjecie kosciola"/>
              </div>
            </div>
        </div>
    </div>

  )
}

export default Intro