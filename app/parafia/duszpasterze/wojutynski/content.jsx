import React from 'react'
import Image from 'next/image'
const Content = () => {
  return (
    <div className='flex flex-row w-full px-[5vw] pt-[18vh] md:pt-[25vh] pb-[10vh] bg-white'>
        
        <div className='w-full md:w-1/2 flex flex-col text-black md:mr-[2vw] justify-center'>
          <h2 className='text-[4.5vh] font-header2'>Ks. Michał Wojutyński</h2>
          <div className='flex md:hidden w-full h-[40vh] md:h-[60vh] relative'>
            <Image alt="ksiadz proboszcz" src="/ksiadz_michal.jpg" fill objectFit='cover'/>
          </div>
          <p className='text-[1.7vh] mt-[2vh] md:mt-[5vh]'>Urodził się w 1985 r. Jest drugim z 5 rodzeństwa. Pochodzi z Parafii Chrystusa Króla na Gołębiowie w Radomiu. </p>
          <p className='text-[1.7vh] mt-[2vh]'>Ukończył Archidiecezjalne Seminarium Misyjne „Redemptoris Mater” w Warszawie. </p>
          <p className='text-[1.7vh] mt-[2vh]'>Czteroletnią praktykę misyjną w czasie seminarium odbył w Austrii, Kolumbii, Norwegii, Szwecji i Danii oraz jako robotnik budowlany i magazynier w fabryce samochodów. </p>
          <p className='text-[1.7vh] mt-[2vh]'>Święcenia kapłańskie przyjął w Świątyni Opatrzności Bożej dnia 28 maja 2022 roku z rąk ks. kard. Kazimierza Nycza. </p>
          <p className='text-[1.7vh] mt-[2vh]'>Przed seminarium duchownym ukończył nauki polityczne na UW, dlatego podczas homilii i rekolekcji może mówić o Bogu i nie czuje naglącej potrzeby mówić o polityce.</p>
          <p className='text-[1.7vh] mt-[2vh]'>Ukończył studia teologiczne na Papieskim Uniwersytecie Gregoriańskim w Rzymie, licencjat kanoniczny z teologii moralnej (w zakresie bioetyki) na Fakultecie Teologicznym w Lugano, studia katechetyczne na Akademii Katolickiej w Warszawie oraz kurs przygotowujący do doktoratu na UKSW.</p>
          <p className='text-[1.7vh] mt-[2vh]'>Jest na Drodze Neokatechumenalnej w Parafii św. Augustyna w Warszawie oraz w parafii rodzinnej. Posługiwał wcześniej Domowemu Kościołowi i asystował Akcji Katolickiej.</p>
          <p className='text-[1.7vh] mt-[2vh]'>W naszej wspólnocie parafialnej od 26 sierpnia 2025 r., odpowiada za Msze Święte dla dzieci. Przygotowuje również dzieci do I Komunii Świętej, prowadzi katechezę przed Chrztem oraz wraz z diakonem stałym odwiedza Chorych. Uczy katechezy w SP 403 w Warszawie.</p>
          <p className='text-[1.7vh] mt-[2vh]'>Honorowy Dawca Krwi – Zasłużony dla Zdrowia Narodu.</p>
          <p className='text-[1.7vh] mt-[2vh]'>W kancelarii parafialnej zazwyczaj dyżuruje w poniedziałki i czwartki.</p>
        </div>
        <div className='hidden md:flex w-1/2 h-[50vh] md:h-[60vh] relative'>
            <Image alt="ksiadz proboszcz" src="/ksiadz_michal.jpg" fill objectFit='cover'/>
        </div>
    </div>
  )
}

export default Content