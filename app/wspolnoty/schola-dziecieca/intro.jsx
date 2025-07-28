import React from 'react'
import Image from 'next/image'
const Intro = () => {
  return (
    <div id="first" className='flex flex-col md:flex-row w-full py-[5vh] md:py-[10vh] px-[5vw] bg-white'>
        <div className='w-1/2  relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/rodz6.jpeg" alt="schola"/>
        </div>
        <div className="h-full w-full md:w-1/2 flex flex-col justify-center">
            <h2 className='text-[4.5vh] font-header2'>Co to jest Schola i kim są Dzieci z Chłodnej?</h2>
            <p className='mt-[5vh] text-black text-[1.7vh]'>Tak na poważnie: Schola to szkoła śpiewania dla dzieci związanych z parafią. By śpiewać w Scholi nie trzeba wybitnych zdolności muzycznych. Dzieci z Chłodnej lubią śpiewać i bardzo się starają! To zazwyczaj wystarczy!</p>
            <p className='mt-[2vh] text-black text-[1.7vh]'>Nad nazwą ciągle pracujemy, ale z pewnego konkursu, na którym zajęliśmy I miejsce pozostała nazwa robocza: Dzieci z Chłodnej.</p>
            <p className='mt-[2vh] text-black text-[1.7vh]'>Jest nas ok. 16 -cioro, rozpiętość wiekowa: 10-25, a prowadzi Scholę od 15 lat Janusz Piechocki zwany „Wujkiem”. Scholę tworzy także wujek Darek, który gra na gitarze akustycznej, i jest też Leoś, który wyznacza rytm na wszelkich instrumentach perkusyjnych. Spotykamy się w niedzielę przed Mszą Św. o 10:27 (to tak, by nikt się nie spóźnił!) Warto wspomnieć i się ucieszyć, że od pewnego czasu Scholę wspierają głosowo także Rodzice dzieci, co spontanicznie powoduje, że Schola dziecięca przekształca się w Rodzinną!</p>
            <p className='mt-[2vh] text-black text-[1.7vh] text-bold'>Po co jest Schola?</p>
            <p className='mt-[2vh] text-black text-[1.7vh]'>Śpiewamy na Eucharystii, więc naszym celem jest wzbogacenie i pogłębienie jej przeżywania. Bliska nam jest chwała Boża! Dużo ćwiczymy, co pomaga nam rozwinąć swoje talenty muzyczne i wokalne. Jesteśmy dość „hałaśliwą” wspólnotą! Śpiewamy też dla przyjemności, radości i satysfakcji. Czasami wpadnie jakaś nagroda … </p>
            {/* <p className='mt-[2vh]'>Śpiewamy również „na zaproszenie” na różnych uroczystościach (np. śluby, pierwsze komunie, pogrzeby). Zebrane fundusze przeznaczamy wyłącznie na nasz rozwój – szkoląc nasze głosy pod kierownictwem specjalistów z Uniwersytetu Muzycznego im. Fryderyka Chopina lub na warsztatach organizowanych przez inne chóry i parafie.</p> */}
        </div>
        <div className='md:hidden h-[40vh] w-full mt-[5vh] relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/rodz6.jpeg" alt="schola"/>
        </div>
    </div>
  )
}

export default Intro