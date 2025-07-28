import React from 'react'
import Image from 'next/image'
import '@fortawesome/fontawesome-free/css/all.min.css'

const Chronology = () => {
  return (
    <div className='w-full flex flex-col px-[3vw] md:px-[5vw] my-[5vh]'>
        <div className='flex flex-row w-full justify-between '>
            <div className='hidden md:flex w-2/5 h-[50vh] relative '>
                <Image className='' fill objectFit='cover' alt="zdjecie historyczne" src="/historia1.jpg"/>
            </div>
            <div className='flex flex-col justify-center items-center pr-[2vw] md:pr-0'>
                <i className='fa-solid fa-circle my-[2vh]'></i>
                <div className='h-full border-black border-l-2'></div>
            </div>

            <div className='w-full md:w-2/5 h-full flex flex-col'>
                <h2 className='text-[4.5vh] font-header2 '>Do 1840</h2>
                <div className='flex md:hidden w-full h-[40vh] relative mt-[2vh]'>
                    <Image className='md:py-[1vh] md:pb-[7vh]' fill objectFit='cover' alt="zdjecie historyczne" src="/historia1.jpg"/>
                </div>
                <p className='mt-[3vh]'>Początkowo kościół zgodnie z wolą fundatorki Klementyny z Sanguszków
Małachowskiej miał służyć przedmieściom Warszawy
i parafii wolskiej pozbawionej w wyniku represji po powstaniu listopadowym kościoła
parafialnego św. Wawrzyńca. Ostatecznie jednak Rząd Królestwa Polskiego postanowił
oddać kościół pod zarząd administracyjny czwartej warszawskiej parafii św. Andrzeja
Apostoła (1774), w której granicach administracyjnych się znalazł.</p>
                {/* <p className='mt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p> */}
            </div>
        </div>

        <div className='flex flex-row w-full justify-between mt-[5vh]'>
            
            
        <div className='flex md:hidden flex-col justify-center items-center pr-[2vw] md:pr-0'>
                <i className='fa-solid fa-circle my-[2vh]'></i>
                <div className='h-full border-black border-l-2'></div>
            </div>
            <div className='w-full md:w-2/5 h-full flex flex-col'>
                <h2 className='text-[4.5vh] font-header2 '>1841</h2>
                <div className='flex md:hidden w-full h-[40vh] relative mt-[2vh]'>
                    <Image className='md:py-[1vh] md:pb-[7vh]' fill objectFit='cover' alt="zdjecie historyczne" src="/historia2.jpg"/>
                </div>
                <p className='mt-[3vh]'>Uroczystość wmurowania kamienia węgielnego odbyła się 18 sierpnia 1841 roku.
W końcowych latach budowy okazało się, że pierwotne fundusze są niewystarczające do
sfinalizowania przedsięwzięcia, dlatego też na prośbę namiestnika Królestwa Polskiego Iwana
Paskiewicza car Mikołaj I przekazał brakującą sumę 117 738 złotych polskich. Kościół został
oddany do odbioru technicznego 30 września 1849 r., natomiast właściwa konsekracja
świątyni odbyła się w święto patrona kościoła św. Karola Boromeusza.</p>
                {/* <p className='mt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p> */}
            </div>
            <div className='hidden md:flex flex-col justify-center items-center pr-[2vw] md:pr-0'>
                <i className='fa-solid fa-circle my-[2vh]'></i>
                <div className='h-full border-black border-l-2'></div>
            </div>
            <div className='hidden md:flex w-2/5 h-[50vh] relative '>
                <Image className='' fill objectFit='cover' alt="zdjecie historyczne" src="/historia2.jpg"/>
            </div>
        </div>

        


        <div className='flex flex-row w-full justify-between mt-[5vh]'>
            <div className='hidden md:flex w-2/5 h-[50vh] relative '>
                <Image className='' fill objectFit='cover' alt="zdjecie historyczne" src="/historia3.jpg"/>
            </div>
            <div className='flex flex-col justify-center items-center pr-[2vw] md:pr-0'>
                <i className='fa-solid fa-circle my-[2vh]'></i>
                <div className='h-full border-black border-l-2'></div>
            </div>

            <div className='w-full md:w-2/5 h-full flex flex-col'>
                <h2 className='text-[4.5vh] font-header2 '>1849</h2>
                <div className='flex md:hidden w-full h-[40vh] relative mt-[2vh]'>
                    <Image className='md:py-[1vh] md:pb-[7vh]' fill objectFit='cover' alt="zdjecie historyczne" src="/historia3.jpg"/>
                </div>
                <p className='mt-[3vh]'>Uroczystości związane z konsekracją kościoła rozpoczęły się w jej wigilię 3 listopada
1849 r., kiedy to w uroczystej procesji z licznym udziałem bractw religijnych, duchownych,
urzędników i mieszkańców Warszawy, przeniesiono relikwie św. Karola Boromeusza
z  kościoła reformatów św. Antoniego z Padwy przy ul. Senatorskiej, gdzie tymczasowo
mieściła się parafia, do nowej świątyni przy ul. Chłodnej.</p>
                <p className='mt-[2vh]'>Kościół został konsekrowany
4  listopada 1849 r. przez bp kujawsko-kaliskiego Tadeusza Łubieńskiego krewnego
fundatorki, a współkonsekratorami byli bp administrator warszawski Antoni Melchior
Fijałkowski i bp kujawsko-kaliski Walenty Maciej Tomaszewski. Na wydarzeniu obecny był
namiestnik Królestwa Polskiego Iwan Paskiewicz, a muzycznie uświetnił je chór Teatru
Wielkiego pod dyrekcją Wojciecha Słoczyńskiego, który wykonał specjalnie skomponowaną
na to wydarzenie Mszę a-moll (op. 81) Józefa Elsnera (1769-1854).</p>
            </div>
        </div>

        <div className='flex flex-row w-full justify-between mt-[5vh]'>
            
        <div className='flex md:hidden flex-col justify-center items-center pr-[2vw] md:pr-0'>
                <i className='fa-solid fa-circle my-[2vh]'></i>
                <div className='h-full border-black border-l-2'></div>
            </div>

            <div className='w-full md:w-2/5 h-full flex flex-col'>
                <h2 className='text-[4.5vh] font-header2 '>II poł. XIX wieku</h2>
                <div className='flex md:hidden w-full h-[40vh] relative mt-[2vh]'>
                    <Image className='md:py-[1vh] md:pb-[7vh]' fill objectFit='cover' alt="zdjecie historyczne" src="/historia5.jpg"/>
                </div>
                <p className='mt-[3vh]'>W XIX w. kościół zapisał się w pamięci podróżnych wyjeżdżających ze stolicy
i przybywających do niej z zachodu. W swej historii przechodził kilka restauracji w latach:
1854, 1869, 1873, 1880, 1887, 1894, i 1899.</p>
            </div>
            <div className='hidden md:flex flex-col justify-center items-center pr-[2vw] md:pr-0'>
                <i className='fa-solid fa-circle my-[2vh]'></i>
                <div className='h-full border-black border-l-2'></div>
            </div>
            <div className='hidden md:flex w-2/5 h-[50vh] relative '>
                <Image className='' fill objectFit='cover' alt="zdjecie historyczne" src="/historia5.jpg"/>
            </div>
        </div>

        <div className='flex flex-row w-full justify-between mt-[5vh]'>
            <div className='hidden md:flex w-2/5 h-[50vh] relative '>
                <Image className='' fill objectFit='cover' alt="zdjecie historyczne" src="/historia6.jpg"/>
            </div>
            <div className='flex flex-col justify-center items-center pr-[2vw] md:pr-0'>
                <i className='fa-solid fa-circle my-[2vh]'></i>
                <div className='h-full border-black border-l-2'></div>
            </div>

            <div className='w-full md:w-2/5 h-full flex flex-col'>
                <h2 className='text-[4.5vh] font-header2 '>Newsy z mediów</h2>
                <div className='flex md:hidden w-full h-[40vh] relative mt-[2vh]'>
                    <Image className='md:py-[1vh] md:pb-[7vh]' fill objectFit='cover' alt="zdjecie historyczne" src="/historia6.jpg"/>
                </div>
                
<p className='mt-[3vh]'>XIX-wieczna prasa jak „Gazeta Warszawska” w następujący sposób oceniała nową
świątynię: świątynia przemawia nowym językiem, najbardziej uderza, że w niej wszystko
inaczej jak gdzie indziej. Z rutyną zrywa, nie daje się krępować więzami i wymaganiami
starego smaku. Odpycha naśladowanie, przybiera sobie charakter własny, wydatny nie
natłoczeniem niesymetrycznem szczegółów i ozdób zbytecznych, ale prostotą form i wymiarów
harmonią godność swą i świetność wyraża (GW 294/1849, s.1.) . </p>
                <p className='mt-[2vh]'>Z kolei w „Kurierze Warszawskim” pisano: gdy przestąpiemy główny próg Świątyni, zdumiewać się będziemy nad
wewnętrzną formą, gustem oraz bogactwem ozdób i pięknościami onej (…) nie podobna jest
nie doznać efektu za pierwszem zaraz zatoczeniem oka przy wejściu do wnętrza (…) smak
i  czystość wieku XIX, i na koniec skromność spojona tak ścisłemi ogniwami z przepychem,
dodają Jej wiele niewypowiedzianego uroku, rozlanego do koła. (KW 291/1849, s. 2.)</p>
                {/* <p className='mt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p> */}
            </div>
        </div>

        {/* <div className='flex flex-row w-full justify-between mt-[5vh]'>
            
            <div className='flex md:hidden flex-col justify-center items-center pr-[2vw] md:pr-0'>
                <i className='fa-solid fa-circle my-[2vh]'></i>
                <div className='h-full border-black border-l-2'></div>
            </div>

            <div className='w-full md:w-2/5 h-full flex flex-col'>
                <h2 className='text-[4.5vh] font-header2 '>1948</h2>
                <div className='flex md:hidden w-full h-[40vh] relative mt-[2vh]'>
                    <Image className='md:py-[1vh] md:pb-[7vh]' fill objectFit='cover' alt="zdjecie historyczne" src="/Historia1.png"/>
                </div>
                <p className='mt-[3vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p className='mt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className='hidden md:flex flex-col justify-center items-center pr-[2vw] md:pr-0'>
                <i className='fa-solid fa-circle my-[2vh]'></i>
                <div className='h-full border-black border-l-2'></div>
            </div>
            <div className='hidden md:flex w-2/5 h-[50vh] relative '>
                <Image className='' fill objectFit='cover' alt="zdjecie historyczne" src="/Historia1.png"/>
            </div>
        </div> */}

    </div>
  )
}

export default Chronology