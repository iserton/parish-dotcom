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
          <p className='text-[1.7vh] mt-[2vh] md:mt-[5vh]'>ks. Paweł Powierza, syn Zofii i Ryszarda, ur. 13 01 1973
w Warszawie, dzieciństwo i młodość spędził w
Łochowie, studia 1992-1998 r. w Warszawskim
Metropolitalnym Seminarium Duchownym, mg teologii
1998 r. licencjat z teologii 1999 r. - Papieski Wydział
Teologiczny w Warszawie, wikariusz parafii św. Trójcy
w Błoniu, św. Wojciecha w Warszawie, św. Aleksandra w
Warszawie, od 2020 r. wikariusz Parafii św. Andrzeja
Apostoła w Warszawie. Imieniny - 29 czerwca,
nauczyciel religii w Szkole Podstawowej nr 220 ul. Jana
Pawła II 26A w Warszawie, oraz w Zespole Szkół nr 7
ul. Chłodna 36/46 w Warszawie W Parafii zajmuje się: -
przygotowaniem dzieci wraz z rodzicami do I Komunii
św., opieką nad ministrantami i lektorami, scholą
dziecięcą - młodzieżową, prowadzi Mszę św. dla dzieci
w niedzielę o godz. 11.30,</p>
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