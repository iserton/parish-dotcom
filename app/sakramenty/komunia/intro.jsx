import React from 'react'
import Image from 'next/image'
const Intro = () => {
  return (
    <div id="first" className='flex flex-col md:flex-row w-full py-[5vh] md:pt-[10vh] px-[5vw] bg-white'>
        <div className='w-1/2  relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/kom0.jpeg" alt="chrzest"/>
        </div>
        <div className="h-full w-full md:w-1/2 flex flex-col justify-center">
            <h2 className='text-[4.5vh] font-header2'>Znaczenie Sakramentu</h2>
            <p className='mt-[5vh]'>„ Bierzcie i jedzcie...” . Uczta życia wiecznego pośród braci, którzy odczuwają potrzebę karmienia swoich sumień i umysłów słowem Chrystusa; Uczta niosąca radość, przemieniające serce spotkanie ze Zbawicielem.</p>
            <p className='mt-[3vh]'>Eucharystia nie jest czymś gotowym, opakowanym, oddanym do dyspozycji. Nie jest produktem, po który się sięga jak w supermarkecie. Eucharystia jest zawsze nowa, bo życie się nie powtarza. Ona czyni nowymi tych, którzy ją celebrują, a także tych, którzy w niej jako wierni uczestniczą. Ona ich wszystkich zmienia i nie pozwala im nigdy odejść takimi, jakimi byli, gdy do niej przystępowali.</p>
            <p className='mt-[3vh]'>Rzecz ma się podobnie jak z morzami i oceanami. Kiedy się patrzy na powierzchnię morza, wszystko wydaje się takie samo. Jednakże pod powierzchnią, w głębinach, kwitnie bogate życie, różne w zależności od miejsca i bardzo piękne.</p>
            <p className='mt-[3vh]'>Te same gesty, te same słowa – choć pozornie zawsze takie same, nie muszą być takie na poziomie duchowym. Za każdym razem są nieco inne i to od nas zależy, czy będą puste, czy może staną się bardzo bogate.</p>
        </div>
        <div className='md:hidden h-[40vh] w-full mt-[5vh] relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/kom0.jpeg" alt="chrzest"/>
        </div>
    </div>
  )
}

export default Intro