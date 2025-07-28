import React from 'react'
import Image from 'next/image'
const Intro = () => {
  return (
    <div id="first" className='flex flex-col md:flex-row w-full py-[5vh] md:pt-[10vh] px-[5vw] bg-white'>
        <div className='w-1/2  relative min-h-[40vh]'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/slub1.jpeg" alt="chrzest"/>
        </div>
        <div className="h-full w-full md:w-1/2 flex flex-col justify-center">
            <h2 className='text-[4.5vh] font-header2'>Znaczenie Sakramentu</h2>
            <p className='mt-[5vh]'>„...i ślubuję, że nie opuszczę cię aż do śmierci...” Znak nierozerwalnej miłości,
która wskazuje na miłość Chrystusa do jego Kościoła.</p>
            {/* <p className='mt-[3vh]'>Chrzest jest „zanurzeniem” w Chrystusa – w moc Jego śmierci i zmartwychwstania, przez które pokonał śmierć i grzech. Dla podkreślenia związku Chrztu ze zmartwychwstaniem Jezusa, zazwyczaj udziela się go w niedzielę. Sakrament Chrztu jest też aktem przyjęcia do wspólnoty Kościoła, dlatego zazwyczaj odbywa się podczas parafialnej Mszy świętej.</p> */}
            {/* <p className='mt-[3vh]'>Czyż nie wiadomo wam, że my wszyscy, którzyśmy otrzymali chrzest zanurzający w Chrystusa Jezusa, zostaliśmy zanurzeni w Jego śmierć? Zatem przez chrzest zanurzający nas w śmierć zostaliśmy razem z Nim pogrzebani po to, abyśmy i my wkroczyli w nowe życie – jak Chrystus powstał z martwych dzięki chwale Ojca. (Rz 6, 3 – 4)</p> */}
        </div>
        <div className='md:hidden h-[40vh] w-full mt-[5vh] relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/slub1.jpeg" alt="chrzest"/>
        </div>
    </div>
  )
}

export default Intro