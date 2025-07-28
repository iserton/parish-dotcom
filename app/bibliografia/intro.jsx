import React from 'react'
import Image from 'next/image'
const Intro = () => {
  return (
    <div id="first" className='flex flex-col md:flex-row w-full py-[5vh] md:py-[10vh] px-[5vw] bg-white'>
        {/* <div className='w-1/2  relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/caritasnew3.jpg" alt="schola"/>
        </div> */}
        <div className="h-full w-full  flex flex-col justify-center">
            <h2 className='text-[4.5vh] font-header2'>Autorzy zdjęć znajdujących się na stronie parafialnej:</h2>
            <p className='mt-[5vh]'>Daniel Krakowiak</p>
            <p className='mt-[2vh]'>Tomacz Owczarek</p>
            <p className='mt-[2vh]'>Adam Nowicki</p>
            <p className='mt-[2vh]'>Konrad </p>
            {/* <p className='mt-[2vh]'>W ostatnim okresie pojawiło się u wielu osób w naszej parafialnej społeczności, zwłaszcza starszych, nowe zjawisko, polegające na przyzwyczajeniu się do przeżywania swojej wiary bez uczestnictwa we Mszy św. i bez korzystania z sakramentów. Pomimo braku obiektywnych przyczyn zdrowotnych osoby te zadowalają się transmisją telewizyjną Mszy św., pomimo braku stosownej dyspensy biskupa. Izolują się od wspólnoty, stając się samotnymi na własne życzenie. Nie możemy ich zostawić, powinniśmy temu trendowi przeciwdziałać. Jest to zadanie także dla Parafialnej Caritas.</p> */}
            {/* <p className='mt-[2vh]'>Aktualnie dzięki zbiórkom ofiar do puszek w każdą pierwszą niedzielę miesiąca, prowadzimy pomoc dla osób potrzebujących. Refundujemy zakup leków, finansujemy zakup niezbędnej odzieży i żywności. Pomagamy przy zaopatrzeniu przed świętami i na co dzień. Odwiedzamy osoby, starsze, chore i samotne rozeznając każdą indywidualną sytuację.</p> */}
            {/* <p className='mt-[2vh]'>Rodzą się pomysły służące integracji i budowaniu wspólnoty. Caritas rozumiana jako miłość bliźniego łączy się z diakonią, jako postawą służby bliźniemu, którą jesteśmy zobowiązani w sobie budować. Jako uczniowie Chrystusa, do których pragniemy być zaliczeni, postępujemy za Nim. Chcemy naśladować w posłudze Miłości Mistrza, który przyszedł na świat by służyć, a nie by Mu służono. Zapraszamy do działania. Jest potrzeba wzmocnienia wolontariatu oraz kierownictwa PZC.</p> */}
        </div>
        {/* <div className='md:hidden h-[40vh] w-full mt-[5vh] relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/caritasnew3.jpg" alt="schola"/>
        </div> */}
    </div>
  )
}

export default Intro