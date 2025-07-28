import React from 'react'
import Image from 'next/image'
const Intro = () => {
  return (
    <div id="first" className='flex flex-col md:flex-row w-full py-[5vh] md:py-[10vh] px-[5vw] bg-white'>
        <div className='w-1/2  relative min-h-[40vh]'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/min6.jpeg" alt="schola"/>
        </div>
        <div className="h-full w-full md:w-1/2 flex flex-col justify-center">
            <h2 className='text-[4.5vh] font-header2'>Kim jesteśmy i jak działamy?</h2>
            <p className='mt-[5vh] text-[1.7vh] mt-[1vh]'>Ministranci - służą Bogu i ludziom, to młodzi ludzie którzy za cel obrali sobie być najbliżej ołtarza. Służą do Mszy św. i nabożeństw w kościele, lektorzy czytają Słowo Boże, pomagają w przygotowaniu rożnych dekoracji i uroczystości kościelnych.</p>
            <p className='mt-[2vh] text-[1.7vh] mt-[1vh]'>Pogłębiają swoją formację poprzez cotygodniowe spotkania w sobotę o godz. 11.00 na plebanii. Tworzą wspólnotę braterstwa poprzez wspólne zabawy i wycieczki - kręgle, strzelnica, obozy wędrowne.</p>
            {/* <p className='mt-[2vh]'>Naszym zadaniem jest przede wszystkim wzbogacenie oprawy mszy świętych, adoracji, medytacji różańcowych i świąt uroczyście celebrowanych w naszej parafii. Biorąc pod uwag fakt, że śpiew pomaga się modlić i sam w sobie może być modlitwą oraz fakt, że człowiek nie żyje sam dla siebie, nasza służba polega na pomocy innym w poznaniu i przybliżeniu się do Boga, a przynajmniej stworzeniu atmosfery, która to umożliwi.</p> */}
            {/* <p className='mt-[2vh]'>Nie śpiewamy dla siebie – to pomaga zrozumieć nasze miejsce w Kościele.</p> */}
            {/* <p className='mt-[2vh]'>W naszym repertuarze są liturgiczne i religijne pieśni dominikańskie, tradycyjne, jak i współczesnych kompozytorów.</p> */}
            {/* <p className='mt-[2vh]'>Śpiewamy również „na zaproszenie” na różnych uroczystościach (np. śluby, pierwsze komunie, pogrzeby). Zebrane fundusze przeznaczamy wyłącznie na nasz rozwój – szkoląc nasze głosy pod kierownictwem specjalistów z Uniwersytetu Muzycznego im. Fryderyka Chopina lub na warsztatach organizowanych przez inne chóry i parafie.</p> */}
        </div>
        <div className='md:hidden h-[40vh] w-full mt-[5vh] relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/min6.jpeg" alt="schola"/>
        </div>
    </div>
  )
}

export default Intro