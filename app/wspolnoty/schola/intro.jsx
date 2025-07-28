import React from 'react'
import Image from 'next/image'
const Intro = () => {
  return (
    <div id="first" className='flex flex-col md:flex-row w-full py-[5vh] md:py-[10vh] px-[5vw] bg-white'>
        <div className='w-1/2  relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/chor11.jpeg" alt="schola"/>
        </div>
        <div className="h-full w-full md:w-1/2 flex flex-col justify-center">
            <h2 className='text-[4.5vh] font-header2'>Kim jesteśmy i jak działamy?</h2>
            <p className='mt-[5vh] text-[1.7vh] mt-[1vh]'>Scholę założyła dwójka muzycznych pasjonatów Marysia Osińska (obecnie Dobrowolska) i Tomek Owczarek. Schola powstała dokładnie 17 lutego 2007 roku, kiedy to na pierwszą próbę przyszło łącznie 5 osób. Od tamtej pory skład zmieniał się wielokrotnie i tak trwamy do dzisiaj śpiewając na niedzielnej mszy świętej o godz. 18.00</p>
            <p className='mt-[2vh] text-[1.7vh] mt-[1vh]'>Zakładaliśmy, że będzie to schola studencka. Praktyka jednak pokazała, że nasza wspólnota potrzebuje bardziej różnorodnego zespołu śpiewaków. I tak w naszym składzie do dzisiaj znajdują swoje miejsce studenci, już nie-studenci, inżynierowie, lekarze, rodzice, matki, ojcowie, pedagodzy, finansiści, stolarze itd.</p>
            <p className='mt-[2vh] text-[1.7vh] mt-[1vh]'>Naszym zadaniem jest przede wszystkim wzbogacenie oprawy mszy świętych, adoracji, medytacji różańcowych i świąt uroczyście celebrowanych w naszej parafii. Biorąc pod uwag fakt, że śpiew pomaga się modlić i sam w sobie może być modlitwą oraz fakt, że człowiek nie żyje sam dla siebie, nasza służba polega na pomocy innym w poznaniu i przybliżeniu się do Boga, a przynajmniej stworzeniu atmosfery, która to umożliwi.</p>
            <p className='mt-[2vh] text-[1.7vh] mt-[1vh]'>Nie śpiewamy dla siebie – to pomaga zrozumieć nasze miejsce w Kościele.</p>
            <p className='mt-[2vh] text-[1.7vh] mt-[1vh]'>W naszym repertuarze są liturgiczne i religijne pieśni dominikańskie, tradycyjne, jak i współczesnych kompozytorów.</p>
            <p className='mt-[2vh] text-[1.7vh] mt-[1vh]'>Śpiewamy również „na zaproszenie” na różnych uroczystościach (np. śluby, pierwsze komunie, pogrzeby). Zebrane fundusze przeznaczamy wyłącznie na nasz rozwój – szkoląc nasze głosy pod kierownictwem specjalistów z Uniwersytetu Muzycznego im. Fryderyka Chopina lub na warsztatach organizowanych przez inne chóry i parafie.</p>
        </div>
        <div className='md:hidden h-[40vh] w-full mt-[5vh] relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/chor11.jpeg" alt="schola"/>
        </div>
    </div>
  )
}

export default Intro