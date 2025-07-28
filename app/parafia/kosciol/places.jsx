import React from 'react'
import Image from 'next/image'

const Places = () => {
  return (
    <div className='w-full flex flex-col px-[5vw] my-[5vh] bg-white'>
         <div className='flex flex-col md:flex-row w-full  my-[5vh]'>
            
            <div className="pr-[5vw] w-full md:w-1/2 h-full flex flex-col justify-center">
                <h2 className='text-[4.5vh] font-header2 text-center md:text-left'>Przedsionek Kościoła</h2>
                <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative my-[1vh]'>
                    <Image fill objectFit='cover' className='' alt="zdjecie ilustrujace miejsce w kosciele" src="/przedsionek.jpeg"/>
                </div>
                <p className='pt-[2vh] text-black text-[1.7vh]'>Do świątyni prowadzą drzwi główne (pierwotnie nad nimi znajdował się napis
fundacyjny: Imperante Nicolao I. Anno MDCCCXLIX – Panowania Mikołaja I Roku 1849)
oraz dwoje drzwi bocznych. Po obu stronach wejścia do kościoła znajdują się kropielnice w
kształcie muszli podpartych serafinami, wykonane z białego marmuru przez Ludwika
Kauffmana. Na ścianach przedsionka znajdują się krzyż roku jubileuszowego 1900 oraz trzy
tablice upamiętniające:</p>
                <p className='pt-[2vh] text-black text-[1.7vh]'>- Żołnierzy Armii Krajowej powstańczych oddziałów specjalnych „Jerzyki”</p>
                <p className='pt-[2vh] text-black text-[1.7vh]'>- Franciszka i Sławomira Cudników, Stefana Goetze i Stanisława Świderskiego
rozstrzelanych przy Hali Mirowskiej 8 sierpnia 1944 r.</p>
                <p className='pt-[2vh] text-black text-[1.7vh]'>- Jeana de Lattre de Tassigny - dowódcę 1 Armii Francuskiej i Marszałka Francji</p>
                
            </div>
            <div className='hidden md:flex w-full md:w-1/2 h-[50vh] relative'>
                <Image fill objectFit='cover' className='md:pl-[5vw]' alt="zdjecie ilustrujace miejsce w kosciele" src="/przedsionek.jpeg"/>
            </div>
        </div>
        <div className='flex flex-col md:flex-row w-full  my-[5vh]'>
            <div className='hidden md:flex w-full md:w-1/2 h-[50vh] relative'>
                <Image fill objectFit='cover' className='pr-[5vw]' alt="zdjecie ilustrujace miejsce w kosciele" src="/nawaglowna.jpeg"/>
            </div>
            <div className="md:pl-[5vw] w-full md:w-1/2 h-full flex flex-col justify-center">
                <h2 className='text-[4.5vh] font-header2 text-center md:text-left'>Nawa Główna</h2>
                <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative my-[1vh]'>
                    <Image fill objectFit='cover' className='' alt="zdjecie ilustrujace miejsce w kosciele" src="/nawaglowna.jpeg"/>
                </div>
                <p className='pt-[2vh] text-black text-[1.7vh]'>Nawa główna jest odzielona od naw bocznych za pomocą 22 wyżłobionych,
żeliwnych kolumn w stylu korynckim odlanych w fabryce Machin Żelaznych Banku
Polskiego na Solcu. Świątynia była pierwszym kościołem w Królestwie Polskim, w którym
zastosowano konstrukcje i wystrój wykonany z lanych odlewów żeliwnych. Na kolumnach
oparte są kamienne arkady łączące je ze sobą i unoszące boczne ściany z oknami. Nawa
główna przykryta jest płaskim sklepieniem ozdobionym gipsowymi kasetonami i rozetami
autorstwa Ferranta Marconiego- brata archiktekta świątyni, a następnie od 1887 r.
modrzewiowymi kasetonami z ozdobami architektonicznymi z blachy cynkowej w formie
rozłożonych kwiatów zaprojektowanymi przez Juliusza Bryzemajstera. </p>
                <p className='pt-[2vh] text-black text-[1.7vh]'>Po lewej stronie nawy głównej znajduje się ambona żeliwna w kształcie kielicha
ufundowana przez Salwina Jakubowskiego i odlana przez Jana Lindera w zakładach
hutniczych w Chlewiskach. </p>
                
            </div>
        </div>
        <div className='flex flex-col md:flex-row w-full  my-[5vh]'>
            
            <div className="pr-[5vw] w-full md:w-1/2 h-full flex flex-col justify-center">
                <h2 className='text-[4.5vh] font-header2 text-center md:text-left'>Prezbiterium</h2>
                <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative my-[1vh]'>
                    <Image fill objectFit='cover' className='' alt="zdjecie ilustrujace miejsce w kosciele" src="/prezbiterium.jpeg"/>
                </div>
                <p className='pt-[2vh] text-black text-[1.7vh]'>Prezbiterium od nawy głównej jest wydzielone za pomocą balasek. Z prawej strony
znajduje się drewniany pulpit oraz chrzcielnica, nad którą umieszczono ciężarek w kształcie
gołębicy. Przy ścianie wisi tablica upamiętniająca, że w parafii św. Andrzeja Apostoła
sakrament chrztu przyjęła bł. Franciszka Józefa Anna Siedliska założycielka Zgromadzenia
Sióstr Najśw. Rodziny z Nazaretu. (Należy doprecyzować, że błogosławiona prawdopodobnie chrzest przyjęła w kościele św. Antoniego z Padwy przy ul. Senatorskiej, gdzie tymczasowo
znajdowała się parafia św. Andrzeja Apostoła).</p>
                <p className='pt-[2vh] text-black text-[1.7vh]'>Na środku nawy poprzecznej, którego przedłużenie stanowi z lewej strony zakrystia
nad którą znajduje się górna loża (dawny skarbiec), a z prawej wnęka po dawnej kaplicy
Matki Bożej, został ustawiony marmurowy ołtarz. Pierwotnie ołtarz główny znajdował się
w  absydzie kościoła, natomiast po Soborze Watykańskim II i wprowadzonych zmianach
ołtarz został ustawiony w centralnej części prezbiterium. Z tyłu po obu jego stronach
ustawiono na marmurowych podstawach dwa okazałe metalowe świeczniki w postaci aniołów
trzymających kandelabry po 11 świec. Wykonane i ufundowane przez rodzinę Fragetów
w  1900 roku. Świeczniki te zostały wystawione na światowej wystawie paryskiej EXPO
w  1900 roku. Fabryka Wyrobów Srebrnych i Platerowych prowadzona przez rodzinę Fraget
od 1844 roku znajdowała się niedaleko kościoła, na ulicy Elektoralnej 16.</p>
                
            </div>
            <div className='hidden md:flex w-full md:w-1/2 h-[50vh] relative'>
                <Image fill objectFit='cover' className='md:pl-[5vw]' alt="zdjecie ilustrujace miejsce w kosciele" src="/prezbiterium.jpeg"/>
            </div>
        </div>
        <div className='flex flex-col md:flex-row w-full  my-[5vh]'>
            <div className='hidden md:flex w-full md:w-1/2 h-[50vh] relative'>
                <Image fill objectFit='cover' className='pr-[5vw]' alt="zdjecie ilustrujace miejsce w kosciele" src="/oltarz.jpeg"/>
            </div>
            <div className="md:pl-[5vw] w-full md:w-1/2 h-full flex flex-col justify-center">
                <h2 className='text-[4.5vh] font-header2 text-center md:text-left'>Obraz św. Andrzeja Apostoła</h2>
                <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative my-[1vh]'>
                    <Image fill objectFit='cover' className='' alt="zdjecie ilustrujace miejsce w kosciele" src="/oltarz.jpeg"/>
                </div>
                <p className='pt-[2vh] text-black text-[1.7vh]'>Obecnie wzrok wiernych w prezbiterium przykuwa obraz „Męczeństwo św. Andrzeja
Apostoła” (1662), pędzla „Śląskiego Rembrandta” Michaela Willmanna (1630-1706). Obraz
pierwotnie znajdował się w kościele Wniebowzięcia NMP, w Lubiążu na Dolnym Śląsku,
a   po II wojnie światowej w 1952 r. umiejscowiony został w kościele św. Karola
Boromeusza. Starano się w ten sposób zapełnić niepowetowane straty (m.in. fresk Michaele’a
Chariniego przedstawiający Trójcę Świętą, ołtarz główny L. Kauffmanna z włoskim obrazem
św. Karola Boromeusza) poniesione na skutek wysadzenia prezbiterium przez Niemców.
Przed obrazem patrona parafii znajduje się szczęśliwie zachowane pozłacane, metalowe
tabernakulum wykonane z blachy miedzianej w fabryce Frageta w 1886 r. Na tabernakulum
umieszczono przedstawienie głowy Chrystusa i Baranka Bożego.</p>
                {/* <p className='pt-[2vh]'>Po lewej stronie nawy głównej znajduje się ambona żeliwna w kształcie kielicha
ufundowana przez Salwina Jakubowskiego i odlana przez Jana Lindera w zakładach
hutniczych w Chlewiskach. </p> */}
                
            </div>
        </div>
        <div className='flex flex-col md:flex-row w-full  my-[5vh]'>
            
            <div className="pr-[5vw] w-full md:w-1/2 h-full flex flex-col justify-center">
                <h2 className='text-[4.5vh] font-header2 text-center md:text-left'>Prawa Nawa Boczna</h2>
                <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative my-[1vh]'>
                    <Image fill objectFit='cover' className='' alt="zdjecie ilustrujace miejsce w kosciele" src="/nawaprawa.jpeg"/>
                </div>
                <p className='pt-[2vh] text-black text-[1.7vh]'>W prawej nawie przy wejściu do świątyni znajduje się dębowy konfesjonał, nad
którym w 1890 r. wmurowano wykonaną z czarnego marmuru tablicę poświęconą
proboszczom parafii z lat 1774-1913. Pod nią została umieszczona kolejna marmurowa
tablica upamiętniająca proboszczów od 1913 r. do czasów współczesnych. Oprócz
powyższych w latach 90-tych XIX w. powieszono tam tablice memoratywne rodziny
Dyamentów i Śmiechowskich, natomiast pozostałe tablice z II poł. XX w. upamiętniają Marię
Pędzikowską – łączniczkę powstania warszawskiego i Romana Theimera – redaktora
„Wiadomości Mirowa”.</p>
                <p className='pt-[2vh] text-black text-[1.7vh]'>Prawa nawa boczna przechodzi w dawną kaplicę Matki Boskiej wysadzoną w styczniu
1945 r. przez Niemców. w wyniku ich działania utracono obraz Luigiego Rubio „Matka Boża
z Dzieciątkiem Jezus i patronami parafii wolskiej św. Wawrzyńcem i Stanisławem” oraz
obraz hrabiny de Larnay przedstawiający fundatorkę świątyni. Obecnie znajduje się tu ołtarz boczny z figurami św. Antoniego, św. Stanisława i św. Wojciecha, zaś na ścianie zawieszony
jest obraz św. Judy Tadeusza.</p>
                
            </div>
            <div className='hidden md:flex w-full md:w-1/2 h-[50vh] relative'>
                <Image fill objectFit='cover' className='md:pl-[5vw]' alt="zdjecie ilustrujace miejsce w kosciele" src="/nawaprawa.jpeg"/>
            </div>
        </div>
        <div className='flex flex-col md:flex-row w-full  my-[5vh]'>
            <div className='hidden md:flex w-full md:w-1/2 h-[50vh] relative'>
                <Image fill objectFit='cover' className='pr-[5vw]' alt="zdjecie ilustrujace miejsce w kosciele" src="/nawalewa.jpeg"/>
            </div>
            <div className="md:pl-[5vw] w-full md:w-1/2 h-full flex flex-col justify-center">
                <h2 className='text-[4.5vh] font-header2 text-center md:text-left'>Lewa Nawa Boczna</h2>
                <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative my-[1vh]'>
                    <Image fill objectFit='cover' className='' alt="zdjecie ilustrujace miejsce w kosciele" src="/nawalewa.jpeg"/>
                </div>
                <p className='pt-[2vh] text-black text-[1.7vh]'>W lewej nawie przy wejściu do świątyni znajduje się dębowy konfesjonał, nad nim
zapewne od 70-tych lat XIX w. umieszczona jest murowana płyta upamiętniająca Feliksa
Rosińskiego (1797-1873) – radcę stanu, zaś po bokach zawieszczone są tablice poświęcone
pamięci Henryka Korzóna (1866-1892) – inżyniera technologii oraz Piotra Neymana (1817-
1879) – seniora Bractwa Zwiastowania NMP. W lewej nawie znajdują się trzy ołtarze,
pierwszy z kopią dzieła Corregia „Narodzenie Pańskie”, przed nim ustawiony został obraz
Matki Boskiej Częstochowskiej. Drugi ołtarz również fundacji Państwa Kownackich zawiera
w sobie obrazy Józefa Buchbindera. Pierwszy przedstawiający św. Franciszka Salezego
oddającego cześć Najświętszemu Sercu Jezusa, zaś nad nim w owalnej ramie umieszczono
obraz św. Matyldy. Na ołtarzu ustawiony został obraz Matki Bożej Nieustającej Pomocy.
Obok ołtarza bocznego znajduje się feretron przedstawiający od widocznej strony
Zwiastowanie NMP, a z drugiej strony Chrystusa dźwigająćego krzyż, dalej zawieszony
został obraz Miłosierdzia Bożego. Lewą nawę boczną zamyka ołtarz z obrazem
Najświętszego Serca Pana Jezusa, przed którym znajduje się figura Matki Bożej Fatimskiej.
Analogicznie jak w prawej nawie zostało umieszczonych 7 stacji Drogi Krzyżowej.</p>
                {/* <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p> */}
                
            </div>
        </div>
        
        <div className='flex flex-col md:flex-row w-full  my-[5vh]'>
            
            <div className="pr-[5vw] w-full md:w-1/2 h-full flex flex-col justify-center">
                <h2 className='text-[4.5vh] font-header2 text-center md:text-left'>Dolny Kościół</h2>
                <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative my-[1vh]'>
                    <Image fill objectFit='cover' className='' alt="zdjecie ilustrujace miejsce w kosciele" src="/piwnica.jpeg"/>
                </div>
                <p className='pt-[2vh] text-black text-[1.7vh]'>Świątynia posiada również dolny kościół pełniący kiedyś funkcję kaplicy
przedpogrzebowej, obecnie jest to kaplica Miłosierdzia Bożego, w której można przyjąć
Sakrament Pokuty i Pojednania.</p>
                {/* <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p> */}
                
            </div>
            <div className='hidden md:flex w-full md:w-1/2 h-[50vh] relative'>
                <Image fill objectFit='cover' className='md:pl-[5vw]' alt="zdjecie ilustrujace miejsce w kosciele" src="/piwnica.jpeg"/>
            </div>
        </div>
        <div className='flex flex-col md:flex-row w-full  my-[5vh]'>
            <div className='hidden md:flex w-full md:w-1/2 h-[50vh] relative'>
                <Image fill objectFit='cover' className='pr-[5vw]' alt="zdjecie ilustrujace miejsce w kosciele" src="/organy.jpeg"/>
            </div>
            <div className="md:pl-[5vw] w-full md:w-1/2 h-full flex flex-col justify-center">
                <h2 className='text-[4.5vh] font-header2 text-center md:text-left'>Organy</h2>
                <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative my-[1vh]'>
                    <Image fill objectFit='cover' className='' alt="zdjecie ilustrujace miejsce w kosciele" src="/organy.jpeg"/>
                </div>
                <p className='pt-[2vh] text-black text-[1.7vh]'>Na chórze muzycznym podpartym arkadową ścianą z dwiema kolumnami korynckimi
i filarami po bokach, znajdują się posiadające 13 głosów organy piszczałkowe, z trakturą
pneumatyczną. Zostały one w 1957 r. złożone przez Józefa Pacewicza z używanych części
sprowadzonych z Wrocławia. W 2013 roku organy zostały wyłączone z użytku i zastąpione
instrumentem elektronicznym.</p>
                {/* <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p> */}
                
            </div>
        </div>
        {/* <div className='flex flex-col md:flex-row w-full  my-[5vh]'>
            <div className='hidden md:flex w-full md:w-1/2 h-[50vh] relative'>
                <Image fill objectFit='cover' className='pr-[5vw]' alt="zdjecie ilustrujace miejsce w kosciele" src="/ambona.jpeg"/>
            </div>
            <div className="md:pl-[5vw] w-full md:w-1/2 h-full flex flex-col justify-center">
                <h2 className='text-[4.5vh] font-header2 text-center md:text-left'>Ambona</h2>
                <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative my-[1vh]'>
                    <Image fill objectFit='cover' className='' alt="zdjecie ilustrujace miejsce w kosciele" src="/ambona.jpeg"/>
                </div>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                
            </div>
        </div> */}
        {/* <div className='flex flex-col md:flex-row w-full  my-[5vh]'>
            
            <div className="pr-[5vw] w-full md:w-1/2 h-full flex flex-col justify-center">
                <h2 className='text-[4.5vh] font-header2 text-center md:text-left'>Zakrystia</h2>
                <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative my-[1vh]'>
                    <Image fill objectFit='cover' className='' alt="zdjecie ilustrujace miejsce w kosciele" src="/zakrystia.jpeg"/>
                </div>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                
            </div>
            <div className='hidden md:flex w-full md:w-1/2 h-[50vh] relative'>
                <Image fill objectFit='cover' className='md:pl-[5vw]' alt="zdjecie ilustrujace miejsce w kosciele" src="/zakrystia.jpeg"/>
            </div>
        </div> */}
        {/* <div className='flex flex-col md:flex-row w-full  my-[5vh]'>
            <div className='hidden md:flex w-full md:w-1/2 h-[50vh] relative'>
                <Image fill objectFit='cover' className='pr-[5vw]' alt="zdjecie ilustrujace miejsce w kosciele" src="/niebo.jpeg"/>
            </div>
            <div className="md:pl-[5vw] w-full md:w-1/2 h-full flex flex-col justify-center">
                <h2 className='text-[4.5vh] font-header2 text-center md:text-left'>Niebo</h2>
                <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative my-[1vh]'>
                    <Image fill objectFit='cover' className='' alt="zdjecie ilustrujace miejsce w kosciele" src="/niebo.jpeg"/>
                </div>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                
            </div>
        </div> */}
    </div>
  )
}

export default Places