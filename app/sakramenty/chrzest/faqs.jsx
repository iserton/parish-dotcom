'use client'
import React from 'react'
import Image from 'next/image'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useState } from 'react';


const Faqs = () => {
    const [show1, set1] = useState(false);
    const [show2, set2] = useState(false);
    const [show3, set3] = useState(false);
    const [show4, set4] = useState(false);
    const [show5, set5] = useState(false);

  return (
    <div className='w-full h-[60vh py-[5vh] md:pt-[10vh] px-[5vw] flex flex-col md:flex-row bg-white'>
        <div className='w-2/5 relative'>
            <Image className="pr-[5vw]" alt="chrzest faqs tlo" src="/chrzest3.jpeg" fill objectFit='cover'/>
        </div>
        <div className='w-full md:w-3/5 h-full flex flex-col'>
            <h2 className='text-black text-[4.5vh] font-header2'>FAQs</h2>
            <p className='mt-[2vh] w-[80%] mb-[5vh] text-black text-[1.7vh]'>Zobacz odpowiedzi na najczęściej zadawane pytanie i zagwostki ktęre mnieli inni. </p>
            <div className='my-[1vh] w-full flex flex-col  border-2 border-black  '>
                <div className='flex flex-row w-full items-center justify-between px-[2vw] py-[2vh] h-full' onClick={() => {set1(!show1)}}>

                    <p className='font-bold'>Kto może zostać rodzicem chrzestnym?</p>
                    <i className={`fa-solid ${show1 ? 'fa-minus' : 'fa-plus'} mr-[0.9vw] text-center text-[2.5vh]`}></i>
                </div>
                <div className={`${show1 ? '' : 'hidden'} px-[2vw] py-[2vh] flex flex-col w-full`}>
                    <p className={` w-full text-black text-[1.7vh] mt-[5vh`}>Kościół katolicki wymaga od kandydatów na chrzestnych, aby mieli ukończone 16 lat, byli praktykującymi katolikami oraz aby otrzymali sakramenty chrztu, pierwszej komunii i bierzmowania. Te kryteria pozostają niezmienne od wielu lat.</p>
                </div>
                
            </div>
            <div className='my-[1vh] w-full flex flex-col  border-2 border-black  '>
                <div className='flex flex-row w-full justify-between items-center px-[2vw] py-[2vh] h-full' onClick={() => {set2(!show2)}}>

                    <p className='font-bold'>Kto może zostać rodzicem chrzestnym?</p>
                    <i className={`fa-solid ${show2 ? 'fa-minus' : 'fa-plus'} mr-[0.9vw] text-center text-[2.5vh]`}></i>
                </div>
                <div className={`${show2 ? '' : 'hidden'} px-[2vw] py-[2vh] flex flex-col w-full`}>
                    <p className={` w-full text-black text-[1.7vh] mt-[5vh`}>Kościół katolicki wymaga od kandydatów na chrzestnych, aby mieli ukończone 16 lat, byli praktykującymi katolikami oraz aby otrzymali sakramenty chrztu, pierwszej komunii i bierzmowania. Te kryteria pozostają niezmienne od wielu lat.</p>
                </div>
                
            </div>
            <div className='my-[1vh] w-full flex flex-col  border-2 border-black  '>
                <div className='flex flex-row w-full justify-between items-center px-[2vw] py-[2vh] h-full' onClick={() => {set3(!show3)}}>

                    <p className='font-bold'>Kto może zostać rodzicem chrzestnym?</p>
                    <i className={`fa-solid ${show3 ? 'fa-minus' : 'fa-plus'} mr-[0.9vw] text-center text-[2.5vh]`}></i>
                </div>
                <div className={`${show3 ? '' : 'hidden'} px-[2vw] py-[2vh] flex flex-col w-full`}>
                    <p className={` w-full text-black text-[1.7vh] mt-[5vh`}>Kościół katolicki wymaga od kandydatów na chrzestnych, aby mieli ukończone 16 lat, byli praktykującymi katolikami oraz aby otrzymali sakramenty chrztu, pierwszej komunii i bierzmowania. Te kryteria pozostają niezmienne od wielu lat.</p>
                </div>
                
            </div>
            <div className='my-[1vh] w-full flex flex-col  border-2 border-black  '>
                <div className='flex flex-row w-full justify-between items-center px-[2vw] py-[2vh] h-full' onClick={() => {set4(!show4)}}>

                    <p className='font-bold'>Kto może zostać rodzicem chrzestnym?</p>
                    <i className={`fa-solid ${show4 ? 'fa-minus' : 'fa-plus'} mr-[0.9vw] text-center text-[2.5vh]`}></i>
                </div>
                <div className={`${show4 ? '' : 'hidden'} px-[2vw] py-[2vh] flex flex-col w-full`}>
                    <p className={` w-full text-black text-[1.7vh] mt-[5vh`}>Kościół katolicki wymaga od kandydatów na chrzestnych, aby mieli ukończone 16 lat, byli praktykującymi katolikami oraz aby otrzymali sakramenty chrztu, pierwszej komunii i bierzmowania. Te kryteria pozostają niezmienne od wielu lat.</p>
                </div>
                
            </div>
            <div className='my-[1vh] w-full flex flex-col  border-2 border-black  '>
                <div className='flex flex-row w-full justify-between items-center px-[2vw] py-[2vh] h-full' onClick={() => {set5(!show5)}}>

                    <p className='font-bold'>Kto może zostać rodzicem chrzestnym?</p>
                    <i className={`fa-solid ${show5 ? 'fa-minus' : 'fa-plus'} mr-[0.9vw] text-center text-[2.5vh]`}></i>
                </div>
                <div className={`${show5 ? '' : 'hidden'} px-[2vw] py-[2vh] flex flex-col w-full`}>
                    <p className={` w-full text-black text-[1.7vh] mt-[5vh`}>Kościół katolicki wymaga od kandydatów na chrzestnych, aby mieli ukończone 16 lat, byli praktykującymi katolikami oraz aby otrzymali sakramenty chrztu, pierwszej komunii i bierzmowania. Te kryteria pozostają niezmienne od wielu lat.</p>
                </div>
                
            </div>
            
        </div>
        <div className='md:hidden h-[40vh] w-full relative mt-[5vh]'>
            <Image className="pr-[5vw]" alt="chrzest faqs tlo" src="/chrzest3.jpeg" fill objectFit='cover'/>
        </div>
    </div>
  )
}

export default Faqs