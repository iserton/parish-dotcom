import React from 'react'
import Image from 'next/image'
const Intro = () => {
  return (
    <div id="first" className='flex flex-col md:flex-row w-full py-[5vh] md:pt-[10vh] px-[5vw] bg-white'>
        <div className='w-1/2  relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/nam6.webp" alt="chrzest"/>
        </div>
        <div className="h-full w-full md:w-1/2 flex flex-col justify-center">
            <h2 className='text-[4.5vh] font-header2'>Znaczenie Sakramentu</h2>
            <p className='mt-[5vh]'>„Niech przez to święte namaszczenie...” . Słowo nadziei, niosące chorym pocieszenie, podnoszące na duchu. Otwiera też horyzont nieśmiertelności tak, by człowiek cierpliwie i z nadzieją czekał jak ślepiec, któremu obiecano pojawienie się światła. W ciemnej otchłani śmierci, stojącym na progu wieczności rozbłyska światło, które nie zna zachodu.</p>
            <p className='mt-[3vh]'>Udzielając sakramentu namaszczenia prosimy Boga:</p>
            <p className='mt-[3vh]'>W przypadku chorego – o oddalenie od niego wszystkich cierpień; przywrócenie pełnego zdrowia, aby nabrał sił do pełnienia swoich obowiązków;</p>
            <p className='mt-[3vh]'>Wiernego w podeszłym wieku – o to, by umocniony łaską Ducha Świętego trwał niezachwianie w wierze i nadziei i wszystkim dawał przykład cierpliwości i świadczył o miłości Boga poprzez swoją pogodę;</p>
            <p className='mt-[3vh]'>Uwiernego w agonii – aby Bóg zmiłował się nad swoim sługą, który toczy ostatnią walkę; by to namaszczenie przyniosło ulgę jego duszy i ciału; by osoba znajdująca się w najbardziej decydującej sytuacji swego życia mogła odpowiedzieć z ufnością: „Panie, oto jestem! Wezwij mnie do siebie!”</p>
        </div>
        <div className='md:hidden h-[40vh] w-full mt-[5vh] relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/nam6.webp" alt="chrzest"/>
        </div>
    </div>
  )
}

export default Intro