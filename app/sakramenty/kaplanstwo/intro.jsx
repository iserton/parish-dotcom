import React from 'react'
import Image from 'next/image'
const Intro = () => {
  return (
    <div id="first" className='flex flex-col md:flex-row w-full py-[5vh] md:pt-[10vh] px-[5vw] bg-white'>
        <div className='w-1/2  relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/kap6.jpeg" alt="chrzest"/>
        </div>
        <div className="h-full w-full md:w-1/2 flex flex-col justify-center">
            <h2 className='text-[4.5vh] font-header2'>Znaczenie Sakramentu</h2>
            <p className='mt-[5vh]'>„Prosimy cię, Ojcze Wszechmogący, daj tym sługom swoim godność prezbiteratu, odnów w ich sercach ducha świętości, aby od Ciebie otrzymali urząd kapłański i przykładem swojego postępowania pociągnęli innych do poprawy obyczajów...”. Kapłan - zwiastun Bożej prawdy, szafarz boskich tajemnic, sprawca obecności jedynej ofiary Chrystusa.</p>
            <p className='mt-[3vh]'>Być kapłanem to być zwiastunem Bożej prawdy, to dawać świadectwo o Bogu, żeby Jego światło mogło świecić wśród nas; to mówić o Bogu wiecznej chwały, który jest naszym życiem, przypominać że śmierć nie jest kresem wszystkiego, że przebiegłość świata jest głupotą i krótkowzrocznością, że istnieje sąd, sprawiedliwość absolutna i życie wieczne.</p>
            <p className='mt-[3vh]'>Istotą jego życia jest: kochać Chrystusa i współkochać z Nim ludzi, a więc zanosić w modlitwie wszystkie ich troski, nadzieje, cierpienia przed oblicze Boga. Mówić Bogu o ludziach – nie tylko mówić ludziom o Bogu.</p>
            <p className='mt-[3vh]'>To jest wyraźnie służba duchowa, poprzez którą kapłan ukazuje swoim braciom i siostrom sens rzeczy ostatecznych i leczy ich serca z niepotrzebnych niepokojów, z przywiązania do dóbr tego świata, z niecnych w swych intencjach dążeń, tak by potrafili stawiać ponad wszystkim Boga.</p>
            <p className='mt-[3vh]'>Jako szafarz łaski Stwórcy wyzwala ludzi z niewoli grzechu i pomaga im w odkrywaniu Boga jako Ojca, w otwieraniu się przed Nim i w miłowaniu Go ponad wszystko.</p>
            <p className='mt-[3vh]'>Idzie do różnych ludzi, żeby ich słuchać i być dla nich drogowskazem, żeby wyciągać ich z manowców pozornego szczęścia, a niekiedy walczyć o ich zbawienie. I chociaż nie zawsze znajdzie gotowe odpowiedzi na wszystkie ich pytania – bo nie jest zdolny dokonywać cudów, jakie mocą Chrystusa czynili Apostołowie – to zawsze może uczynić jedno: dzielić z nimi – za przykładem Jezusa – ich radości i trudy, cierpienia i nadzieje. I umacniać w nich dobro.</p>
        </div>
        <div className='md:hidden h-[40vh] w-full mt-[5vh] relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/kap6.jpeg" alt="chrzest"/>
        </div>
    </div>
  )
}

export default Intro