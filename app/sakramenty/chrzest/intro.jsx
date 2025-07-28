import React from 'react'
import Image from 'next/image'
const Intro = () => {
  return (
    <div id="first" className='flex flex-col md:flex-row w-full py-[5vh] md:pt-[10vh] px-[5vw] bg-white'>
        <div className='w-1/2  relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/chrzest2.jpeg" alt="chrzest"/>
        </div>
        <div className="h-full w-full md:w-1/2 flex flex-col justify-center">
            <h2 className='text-[4.5vh] font-header2'>Znaczenie Sakramentu</h2>
            <p className='mt-[5vh]'>„Ja ciebie chrzczę...”. Bóg kładzie swoją prawicę na życiu człowieka i zostaje on wprowadzony do wspólnoty wiary, która przyrzeka być obecna w jego życiu.</p>
            <p className='mt-[3vh]'>W sakramencie chrztu do dziecka Bóg i mówi: „Będę z tobą każdego dnia, bo będę twoim Ojcem, a ty będziesz moim dzieckiem. Z pomocą twojej rodziny i Kościoła rozpoczniesz poszukiwanie wiary i wędrówkę prowadzącą do odnalezienia radości tutaj i w przyszłym życiu”.</p>
            <p className='mt-[3vh]'>Dziecko zostanie ochrzczone w Kościele. Cała wspólnota wierzących nawiąże nową więź z tym dzieckiem. Będzie ono miało odtąd nową rodzinę, nowych wujków i nowe ciocie, kuzynów i krewnych. Jeżeli rodzice otworzą się wraz ze swoim dzieckiem na te nowe więzi, nie będą się czuli nigdy samotni. Jaka jest ta nowa rodzina? To wspólnota, grupa osób związanych tą samą historią, przyjmujących te same symbole i dążących do tego samego ideału. Jak wszystkie rodziny przeżywa ona swoje dobre i złe chwile, ale cokolwiek by się wydarzyło, jest zawsze gotowa do spoglądania na swych członków z radością i do kochania ich bez zadawania pytań.</p>
            <p className='mt-[3vh]'>Nowa rodzina dziecka będzie się często zbierała, by błogosławić Ojca. W każdą niedzielę na całym świecie katolicy zbierają się, aby wznosić swe serca w modlitwie. Ochrzczone dziecko zostanie ogarnięte tą wspólną modlitwą i nie będzie z niej wykluczone nawet wtedy, gdyby w swym dojrzałym życiu zapomniało o niej. Zawsze pozostanie dla niego nie zajęte przez nikogo miejsce w modlitwie Kościoła.</p>
        </div>
        <div className='md:hidden h-[40vh] w-full mt-[5vh] relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/chrzest2.jpeg" alt="chrzest"/>
        </div>
    </div>
  )
}

export default Intro