import React from 'react'
import Image from 'next/image'
const Content = () => {
  return (
    <div className='flex flex-row w-full px-[5vw] pt-[18vh] md:pt-[25vh] pb-[10vh] bg-white'>
        
        <div className='w-full md:w-1/2 flex flex-col text-black md:mr-[2vw] justify-center'>
          <h2 className='text-[4.5vh] font-header2'>Ks. Paweł Powierza</h2>
          <div className='flex md:hidden w-full h-[40vh] md:h-[60vh] relative'>
            <Image alt="ksiadz proboszcz" src="/ksiadz_pawel2.jpeg" fill objectFit='cover'/>
          </div>
          <p className='text-[1.7vh] mt-[2vh] md:mt-[5vh]'>Ks. Paweł Powierza – syn Zofii i Ryszarda, urodzony 13 stycznia 1973 r. w Warszawie. Dzieciństwo i młodość spędził w Łochowie.

W latach 1992–1998 odbył studia w Warszawskim Metropolitalnym Seminarium Duchownym. W 1998 r. uzyskał tytuł magistra teologii, a w 1999 r. licencjat kanoniczny z teologii na Papieskim Wydziale Teologicznym w Warszawie.

Posługę duszpasterską pełnił jako wikariusz w parafiach: św. Trójcy w Błoniu, św. Wojciecha w Warszawie oraz św. Aleksandra w Warszawie. Od 2020 r. jest wikariuszem, a od czerwca 2025 r. proboszczem Parafii św. Andrzeja Apostoła w Warszawie.

Imieniny obchodzi 29 czerwca. Pracuje jako nauczyciel religii w Szkole Podstawowej nr 220 przy ul. Jana Pawła II 26A w Warszawie oraz w Zespole Szkół nr 7 przy ul. Chłodnej 36/46 w Warszawie.</p>
          {/* <p className='text-[1.7vh] mt-[2vh]'>Przez cztery lata pełnił funkcję ojca duchownego w Wyższym Seminarium Duchownym w Warszawie. W
roku 1987 został proboszczem parafii o wdzięcznej nazwie Jasieniec. Następnie przez dziesięć lat był
proboszczem parafii św. Krzysztofa w Podkowie Leśnej.</p>
          <p className='text-[1.7vh] mt-[2vh]'>25 listopada 2001 roku opuścił Miasto Ogród, ponieważ został mianowany przez Kard. Józefa Glempa
proboszczem parafii św. Andrzeja Apostoła w Warszawie. Jako proboszcz parafii odpowiedzialny jest za
posługę duszpasterską, wykonując zadania nauczania, uświecania i zarządzania.</p> */}
        </div>
        <div className='hidden md:flex w-1/2 h-[50vh] md:h-[60vh] relative'>
            <Image alt="ksiadz proboszcz" src="/ksiadz_pawel2.jpeg" fill objectFit='cover'/>
        </div>
    </div>
  )
}

export default Content