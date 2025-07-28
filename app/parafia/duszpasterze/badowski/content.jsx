import React from 'react'
import Image from 'next/image'
const Content = () => {
  return (
    <div className='flex flex-row w-full px-[5vw] pt-[18vh] md:pt-[25vh] pb-[10vh] bg-white'>
        
        <div className='w-full md:w-1/2 flex flex-col text-black md:mr-[2vw] justify-center'>
          <h2 className='text-[4.5vh] font-header2'>Ks. Zbigniew Badowski</h2>
          <div className='flex md:hidden w-full h-[40vh] md:h-[60vh] relative'>
            <Image alt="ksiadz proboszcz" src="/ksiadz_zbigniew.jpeg" fill objectFit='cover'/>
          </div>
          <p className='text-[1.7vh] mt-[2vh] md:mt-[5vh]'>Urodził się 26.10.1953 w Białobrzegach, na ziemi radomskiej. W latach 1972-1978
studiował w Wyższym Seminarium Duchownym w Warszawie, gdzie otrzymał tytuł
magistra teologii w zakresie Historii Kościoła. W latach 1982-1985 odbył studia na
Akademii Teologii Katolickiej w Warszawie, gdzie obronił pracę magisterską z prawa
kanonicznego, po czym odbył studia doktoranckie i w 1990 roku otrzymał tytuł doktora
nauk prawnych ATK.</p>
          <p className='text-[1.7vh] mt-[2vh]'>Od 1990 do dziś pracuje jako sędzia w Warszawskim Sądzie Metropolitalnym. W 2013
został mianowany prałatem i członkiem Kapituły Świątyni Opatrzności Bożej w
Warszawie. W latach 1997-2009 był wykładowcą prawa kanonicznego i wyznaniowego na
Papieskim Wydziale Teologicznym w Warszawie, w Wyższej Szkole Biznesu i Administracji
im. Tadeusza Koźluka w Warszawie, a także w Wyższej Szkole Pedagogicznej w
Warszawie.</p>
          <p className='text-[1.7vh] mt-[2vh]'>Posługę w parafii św. Andrzeja Apostoła rozpoczął 30 listopada 2001 r.
Prywatnie interesuje się literaturą teologiczną, prawniczą, historyczną, filozoficzną. Lubi
rozmawiać z ludźmi, jeździć na rowerze, odbywać wycieczki krajoznawcze. Jednak – jak
mówi - wszystko powyższe jest tylko dodatkiem, gdyż od ponad 45 lat najpełniej realizuje
się jako ksiądz w pracy duszpasterskiej.</p>
        </div>
        <div className='hidden md:flex w-1/2 h-[50vh] md:h-[60vh] relative'>
            <Image alt="ksiadz proboszcz" src="/ksiadz_zbigniew.jpeg" fill objectFit='cover'/>
        </div>
    </div>
  )
}

export default Content