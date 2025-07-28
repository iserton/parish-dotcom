import React from 'react'
import Image from 'next/image'
import '@fortawesome/fontawesome-free/css/all.min.css';

const Faqs = () => {
  return (
    <div className='w-full h-[60vh] px-[5vw] flex flex-row bg-white'>
        <div className='h-full w-2/5 relative'>
            <Image className="pr-[5vw]" alt="chrzest faqs tlo" src="/chrzest3.jpeg" fill objectFit='cover'/>
        </div>
        <div className='w-3/5 h-full flex flex-col'>
            <h2 className='text-[4.5vh] font-header2'>FAQs</h2>
            <p className='mt-[2vh] w-[80%] mb-[5vh]'>Zobacz odpowiedzi na najczesciej zadawane pytanie i zagowstki ktore mnieli inni. </p>
            <div className='my-[1vh] w-full flex flex-row justify-between px-[2vw] py-[2vh] border-2 border-black  '>
                <p className='font-bold'>Kto moze zostac rodzicem chrzestnym?</p>
                <i className={`fa-solid fa-plus mr-[0.9vw] text-center text-[1.3vw]`}></i>
            </div>
            <div className='my-[1vh] w-full flex flex-row justify-between px-[2vw] py-[2vh] border-2 border-black  '>
                <p className='font-bold'>Kto moze zostac rodzicem chrzestnym?</p>
                <i className={`fa-solid fa-plus mr-[0.9vw] text-center text-[1.3vw]`}></i>
            </div>
            <div className='my-[1vh] w-full flex flex-row justify-between px-[2vw] py-[2vh] border-2 border-black  '>
                <p className='font-bold'>Kto moze zostac rodzicem chrzestnym?</p>
                <i className={`fa-solid fa-plus mr-[0.9vw] text-center text-[1.3vw]`}></i>
            </div>
            <div className='my-[1vh] w-full flex flex-row justify-between px-[2vw] py-[2vh] border-2 border-black  '>
                <p className='font-bold'>Kto moze zostac rodzicem chrzestnym?</p>
                <i className={`fa-solid fa-plus mr-[0.9vw] text-center text-[1.3vw]`}></i>
            </div>
            <div className='my-[1vh] w-full flex flex-row justify-between px-[2vw] py-[2vh] border-2 border-black  '>
                <p className='font-bold'>Kto moze zostac rodzicem chrzestnym?</p>
                <i className={`fa-solid fa-plus mr-[0.9vw] text-center text-[1.3vw]`}></i>
            </div>
            
        </div>
    </div>
  )
}

export default Faqs