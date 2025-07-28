import React from 'react'
import Image from 'next/image'
const Content = () => {
  return (
    <div className='flex flex-row w-full px-[5vw] pt-[18vh] md:pt-[25vh] pb-[10vh] bg-white'>
        
        <div className='w-full md:w-1/2 flex flex-col text-black md:mr-[2vw] justify-center'>
          <h2 className='text-[4.5vh] font-header2'>Ks. diakon Cezary J. Uszyński</h2>
          <div className='flex md:hidden w-full h-[40vh] md:h-[60vh] relative'>
            <Image alt="ksiadz proboszcz" src="/diakonnew1.jpeg" fill objectFit='cover'/>
          </div>
          <p className='text-[1.7vh] mt-[2vh] md:mt-[5vh]'>Urodził się 15.04.1953 r. w Szczecinie. Wychowywał się w Warszawie, na Woli, w parafii Św.
Stanisława Biskupa. 31.12.1974 r., w parafii św. Andrzeja Apostoła w Warszawie, zawarł
związek małżeński z Magdaleną. Państwo Uszyńscy mają cztery dorosłe córki i pięciu wnuków.</p>
          <p className='text-[1.7vh] mt-[2vh]'>Od 2008 r. pełnił posługę Nadzwyczajnego Szafarza Komunii Świętej w parafii Św. Krzysztofa w
Podkowie Leśnej. W latach 2009 - 2015 odbył studia teologiczne w Papieskim Wydziale
Teologicznym w Warszawie. Napisał pracę magisterską na temat &lquot;Rodzina miejscem
uświęcenia małżonków w świetle wybranych tekstów nauczania Św. Jana Pawła II&rquot;. Egzamin
magisterski z Teologii Ogólnej zdał 16.06.2018 r. Odbył 4,5-letnią formację przygotowującą do
Święceń Diakonatu prowadzoną przez zespół kapłanów Archidiecezji Warszawskiej, pod opieką
biskupa Michała Janochy. Dnia 23.05.20 21 r., w Uroczystość Zesłania Ducha Świętego, w
Archikatedrze Warszawskiej ks. biskup Michał Janocha udzielił mu Sakramentu Święceń
Diakonatu.</p>
          <p className='text-[1.7vh] mt-[2vh]'>Posługę w parafii św. Andrzeja Apostoła w Warszawie rozpoczął 30.05.2021 r. Diakon z mocy
Święceń pełni posługę w Kościele w czterech właściwych mu obszarach: liturgii (sprawowanie
sakramentów i sakramentaliów oraz posługa przy ołtarzu); głoszenie Słowa Bożego (kerygmat,
katecheza, przygotowanie do przyjęcia sakramentów, homilia) ; posługi miłości - caritas
(diakonia) : życie wspólnoty (animacja wspólnot, grup i ruchów). W parafii odpowiedzialny jest
za pobudzanie do diakońskiej służby członków parafii i dbanie, by parafianie chcieli i potrafili ją
pełnić. Do szczególnych jego zadań należy: troska o ludzi na obrzeżach Kościoła i próby
doprowadzenia ich do Eucharystii; posługa caritas zwrócona ku cierpiącym, biednym, chorym,
opuszczonym, wykluczonym.</p>
          <p className='text-[1.7vh] mt-[2vh]'>Prywatnie: w przeszłości instruktor ZHP i ZHR, miłośnik przyrody, turysta; orędownik
wychowania młodzieży do samodzielności i zaradności, przez praktyczne działanie. Absolwent
Wydziału Elektrycznego Politechniki Warszawskiej (inżynier elektryk); od 1980 roku prowadzi
działalność we własnej firmie instalacyjnej; dziś - czynny zawodowo emeryt.</p>
<p className='text-[1.7vh] mt-[2vh]'>Inspiracje
&lquot; Więcej szczęścia jest w dawaniu aniżeli w braniu&rquot; Dz.20,35</p>
<p className='text-[1.7vh] mt-[2vh]'>Przesłanie do parafian:
Pragnę dzielić się z innymi ludźmi receptą na szczęście możliwe do osiągnięcia już tu, w czasie
naszej ziemskiej pielgrzymki. Szczęście czerpiemy obdarowując innych swoim czasem,
zainteresowaniem, troską, słuchaniem, bezinteresowną pomocą ze względu na Chrystusa,
którego staramy się dostrzegać w każdym bracie i każdej siostrze.</p>
        </div>
        <div className='hidden md:flex w-1/2 h-[50vh] md:h-[60vh] relative'>
            <Image alt="ksiadz proboszcz" src="/diakonnew1.jpeg" fill objectFit='cover'/>
        </div>
    </div>
  )
}

export default Content