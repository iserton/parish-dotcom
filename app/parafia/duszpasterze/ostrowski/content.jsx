import React from 'react'
import Image from 'next/image'
const Content = () => {
  return (
    <div className='flex flex-row w-full px-[5vw] pt-[18vh] md:pt-[25vh] pb-[10vh] bg-white'>
        
        <div className='w-full md:w-1/2 flex flex-col text-black md:mr-[2vw] justify-center'>
          <h2 className='text-[4.5vh] font-header2'>Ks. Andrzej Ostrowski</h2>
          <div className='flex md:hidden w-full h-[40vh] md:h-[60vh] relative'>
            <Image alt="ksiadz proboszcz" src="/ksiadz_andrzej.jpeg" fill objectFit='cover'/>
          </div>
          <p className='text-[1.7vh] mt-[2vh] md:mt-[5vh]'>Urodził się 27 listopada 1979 w Warszawie. Święcenia kapłańskie przyjął 28 maja 2005 w
Bazylice Archikatedralnej w Warszawie z rąk ks. kardynała Józefa Glempa.</p>
          <p className='text-[1.7vh] mt-[2vh]'>Ukończył Wyższe Seminarium Duchowne w Warszawie, Papieski Wydział Teologiczny (liturgika,
2004), studia podyplomowe Wyższa Szkoła Filologii Hebrajskiej w Toruniu (2013), kurs na
przewodników po Ziemi Świętej przy Studium Biblicum Franciscanum w Jerozolimie (2013). Od
2013 roku, decyzją Comissione dei Pellegrinaggi Cristiani w Jerozolimie, jest przewodnikiem po
krajach Bliskiego Wschodu.</p>
          <p className='text-[1.7vh] mt-[2vh]'>Posługę w parafii św. Andrzeja Apostoła w Warszawie rozpoczął 26 sierpnia 2020 r. W parafii
odpowiedzialny jest za: Rycerstwo Niepokalanej, posługę u chorych parafii oraz przygotowanie
młodzieży do przyjęcia sakramentu bierzmowania.</p>
          <p className='text-[1.7vh] mt-[2vh]'>Prywatnie: człowiek, ksiądz, duszpasterz, katecheta. Zafascynowany Ziemią Boga - Ziemią
Świętą. Nauczyciel w klasach SMS Akademii Legia Warszawa.</p>
        </div>
        <div className='hidden md:flex w-1/2 h-[50vh] md:h-[60vh] relative'>
            <Image alt="ksiadz proboszcz" src="/ksiadz_andrzej.jpeg" fill objectFit='cover'/>
        </div>
    </div>
  )
}

export default Content