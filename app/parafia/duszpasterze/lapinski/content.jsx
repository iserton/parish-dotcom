import React from 'react'
import Image from 'next/image'
const Content = () => {
  return (
    <div className='flex flex-row w-full px-[5vw] pt-[18vh] md:pt-[25vh] pb-[10vh] bg-white'>
        
        <div className='w-full md:w-1/2 flex flex-col text-black md:mr-[2vw] justify-center'>
          <h2 className='text-[4.5vh] font-header2'>Ks. Grzegorz Łapiński</h2>
          <div className='flex md:hidden w-full h-[40vh] md:h-[60vh] relative'>
            <Image alt="ksiadz proboszcz" src="/ksiadz_grzegorz.jpg" fill objectFit='cover'/>
          </div>
          <p className='text-[1.7vh] mt-[2vh] md:mt-[5vh]'>Urodzony w 1977 roku w Kielcach. Przed seminarium ukończył studia budowlane na Politechnice Świętokrzyskiej, po czym pracował cztery i pół roku w firmie produkującej pokrycia dachowe. </p>
          <p className='text-[1.7vh] mt-[2vh]'>Decyzję wstąpienia do seminarium podjął po spotkaniu młodzieży z Papieżem Benedyktem XVI i spotkaniu powołaniowym wspólnot Neokatechumenalnych w Loreto we Włoszech. </p>
          <p className='text-[1.7vh] mt-[2vh]'>W trakcie formacji w seminarium odbył dwa lata praktyk ewangelizacyjnych w Łodzi. </p>
          <p className='text-[1.7vh] mt-[2vh]'>Święcenia kapłańskie przyjął w maju 2017 roku po ukończeniu Archidiecezjalnego Seminarium Misyjnego Redemptoris Mater w Warszawie. </p>
          <p className='text-[1.7vh] mt-[2vh]'>Należy do wspólnoty Neokatechumenalnej.</p>
          <p className='text-[1.7vh] mt-[2vh]'>Przez dziewięć lat był wikariuszem w parafii Wszystkich Świętych w Warszawie.</p>
          <p className='text-[1.7vh] mt-[2vh]'>Od 26 sierpnia 2026 został skierowany do posługi w parafii św. Andrzeja Apostoła.</p>
        </div>
        <div className='hidden md:flex w-1/2 h-[50vh] md:h-[60vh] relative'>
            <Image alt="ksiadz proboszcz" src="/ksiadz_grzegorz.jpg" fill objectFit='cover'/>
        </div>
    </div>
  )
}

export default Content