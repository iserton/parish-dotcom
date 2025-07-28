import React from 'react'
import Image from 'next/image'
const Intro = () => {
  return (
    <div id="first" className='flex flex-row w-full h-[70vh] px-[5vw] bg-white my-[5vh]'>
        <div className='h-full w-1/2  relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/bierz6.webp" alt="chrzest"/>
        </div>
        <div className="h-full w-1/2 flex flex-col justify-center">
            <h2 className='text-[4.5vh] font-header2'>Znaczenie Sakramentu</h2>
            <p className='mt-[5vh]'>„Przyjmij znamię daru Ducha Świętego...” . Umocnienie darami Ducha Świętego do dawania świadectwa wierze - głównie przykładem swego życia, ważniejszym od wszelkich słów .</p>
            <p className='mt-[3vh]'>Od chwili chrztu, odrodzony z wody i Ducha Świętego, wchodzi w skład rodziny dzieci Bożych, staje się chrześcijaninem, członkiem Kościoła. Potem dorasta i sam może powiedzieć swoje «tak» Bogu, «tak» dobrowolne i świadome. Sakrament bierzmowania potwierdza chrzest. Teraz uczeń Chrystusa pełen wdzięczności, może przyjąć Jego wielkie dary, które pomagają na drodze życia, aby stał się wiernym i odważnym świadkiem Jezusa. Dary Ducha Świętego pozwalają kształtować siebie jako chrześcijan, żyć Ewangelią i być aktywnymi członkiem wspólnoty.</p>
            {/* <p className='mt-[3vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p> */}
        </div>
    </div>
  )
}

export default Intro