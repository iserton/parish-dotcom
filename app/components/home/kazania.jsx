import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Kazania = () => {
  return (
    <div className='flex w-full  flex-col md:flex-row bg-black'>
        <div className='w-full md:w-[50%] h-[40vh] md:h-auto flex relative bg-black'>
            <Image alt='tlo kazania' fill objectFit='cover' src="/proboszcz2.jpeg"/>
        </div>
        <div className='md:ml-[6vw] flex flex-col w-full md:w-1/2 h-full justify-center px-[8vw] text-white bg-black py-[5vh] md:py-[10vh] md:pl-0'>
            <h2 className='text-3xl font-header2'>Kazania Ojca Leszka</h2>
            
            <p className='mt-6'>Zapraszamy do stołu Słowa Bożego, który hojnie dla nas zastawia ksiądz Ojciec Leszek Slipek. </p>
            <p className='mt-4'>Prezentujemy nagrania kazań niedzielnych i świątecznych, konferencji, medytacji. Bierzcie i... słuchajcie!</p>
            {/* <p className='mt-[1vh]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content her,</p> */}
            <p>
            <Link href="/aktualnosci/kazania"><button className='p-4 bg-dark text-white mt-6'>Zobacz więcej</button></Link>

            </p>
        </div>
    </div>
  )
}

export default Kazania