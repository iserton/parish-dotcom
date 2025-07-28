import React from 'react'
import Image from 'next/image'
const Intro = () => {
  return (
    <div id="first" className='flex flex-col md:flex-row w-full py-[5vh] md:py-[10vh] px-[5vw] bg-white'>
        <div className='w-1/2  relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/caritasnew3.jpg" alt="schola"/>
        </div>
        <div className="h-full w-full md:w-1/2 flex flex-col justify-center">
            <h2 className='text-[4.5vh] font-header2'>Kim jesteśmy i jak działamy?</h2>
            <p className='mt-[5vh] text-[1.7vh] mt-[1vh]'>Nasz Parafialny Zespół Caritas powołano specjalnym Aktem w dniu 2.10.2002 r. Przez blisko dwadzieścia lat prowadził różne formy wsparcia: refundację leków, dofinansowanie wypoczynku dzieci, zakup sprzętu rehabilitacyjnego, paczki świąteczne, pomoc rodzinom wielodzietnym, ludziom starszym i samotnym.</p>
            <p className='mt-[2vh] text-[1.7vh] mt-[1vh]'>Okres pandemii był czasem ograniczeń. Mała liczba wiernych w kościele, zaniechanie zbiórek pieniężnych oraz brak bezpośrednich kontaktów zahamowały także działalność P.Z.C.</p>
            <p className='mt-[2vh] text-[1.7vh] mt-[1vh]'>Dzięki wrażliwości i chrześcijańskiej postawie niektórych parafian udało się kontynuować działalność pomocową. Warto odnotować zarówno odwagę, jak i ofiarność z jaką nieśli oni pomoc, nie szczędząc czasu i swoich własnych środków. To piękna karta historii Parafialnej Caritas Parafii Św. Andrzeja Apostoła w Warszawie.</p>
            <p className='mt-[2vh] text-[1.7vh] mt-[1vh]'>W ostatnim okresie pojawiło się u wielu osób w naszej parafialnej społeczności, zwłaszcza starszych, nowe zjawisko, polegające na przyzwyczajeniu się do przeżywania swojej wiary bez uczestnictwa we Mszy św. i bez korzystania z sakramentów. Pomimo braku obiektywnych przyczyn zdrowotnych osoby te zadowalają się transmisją telewizyjną Mszy św., pomimo braku stosownej dyspensy biskupa. Izolują się od wspólnoty, stając się samotnymi na własne życzenie. Nie możemy ich zostawić, powinniśmy temu trendowi przeciwdziałać. Jest to zadanie także dla Parafialnej Caritas.</p>
            <p className='mt-[2vh] text-[1.7vh] mt-[1vh]'>Aktualnie dzięki zbiórkom ofiar do puszek w każdą pierwszą niedzielę miesiąca, prowadzimy pomoc dla osób potrzebujących. Refundujemy zakup leków, finansujemy zakup niezbędnej odzieży i żywności. Pomagamy przy zaopatrzeniu przed świętami i na co dzień. Odwiedzamy osoby, starsze, chore i samotne rozeznając każdą indywidualną sytuację.</p>
            <p className='mt-[2vh] text-[1.7vh] mt-[1vh]'>Rodzą się pomysły służące integracji i budowaniu wspólnoty. Caritas rozumiana jako miłość bliźniego łączy się z diakonią, jako postawą służby bliźniemu, którą jesteśmy zobowiązani w sobie budować. Jako uczniowie Chrystusa, do których pragniemy być zaliczeni, postępujemy za Nim. Chcemy naśladować w posłudze Miłości Mistrza, który przyszedł na świat by służyć, a nie by Mu służono. Zapraszamy do działania. Jest potrzeba wzmocnienia wolontariatu oraz kierownictwa PZC.</p>
        </div>
        <div className='md:hidden h-[40vh] w-full mt-[5vh] relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/caritasnew3.jpg" alt="schola"/>
        </div>
    </div>
  )
}

export default Intro