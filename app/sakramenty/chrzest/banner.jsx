import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col justify-between w-full px-[5vw]  bg-dark text-white items-center py-[5vh]'>
         <h2 className='text-[5.5vh] font-header2 text-center'>Warunki przystąpienia do chrztu</h2>
        <div className='flex flex-col md:flex-col w-full justify-between items-center mt-[5vh]'>

        <p className='w-full '>Do rodziców należy obowiązek pobudzania i wychowania dzieci do wiary. Do
rodziców bowiem należy początek chrześcijańskiej inicjacji dziecka i nauczenie
go kochania Chrystusa, a także uformowanie chrześcijańskiego sumienia.</p>
        <p className='w-full  mt-[2vh] '>Zdarza się, że mało wierzący i tylko przygodnie praktykujący rodzice zwracają
się do księdza o chrzest swych dzieci.</p>
        <p className='w-full  mt-[2vh] '>Kościół nie może spełnić życzenia tych rodziców, jeśli nie zagwarantują oni, że
dziecko po chrzcie otrzyma takie katolickie wychowanie, jakiego sakrament
wymaga. Kościół musi mieć podstawy do nadziei, że chrzest wyda swoje
owoce.</p>
        <p className='w-full  mt-[2vh] '>Jeśli udzielone gwarancje – np. wybór rodziców chrzestnych, którzy poważnie
zajmą się dzieckiem są wystarczające, udziela się chrztu. Lecz jeśli gwarancje
nie są wystarczające, chrzest zostaje odroczony aż rodzice spełnią wymagane
od nich a konieczne do udzielenia chrztu warunki.</p>
        <p className='w-full  mt-[2vh] '>Jeżeli jednak również i takie rozwiązanie nie byłoby możliwe, dziecko powinno
przejść katechumenat w okresie szkolnym.</p>
        <p className='w-full  mt-[2vh] '>Chrzestny ( może być tylko jeden chrzestny!) reprezentuje odpowiedzialność i
miłość pasterską Kościoła od zarania życia nowego człowieka. Spełnianie tego
zadania jest możliwe tylko wtedy, gdy rodzice chrzestni we własnym życiu są
świadkami Chrystusa, żyjącymi wiarą na co dzień.</p>
        <p className='w-full  mt-[2vh] '>Do przyjęcia zadania chrzestnego może być więc dopuszczony ten, kto przyjął
trzy sakramenty wtajemniczenia: chrzest, bierzmowanie i Eucharystię oraz
prowadzi życie zgodne z wiarą i z zadaniem, jakie ma pełnić.</p>
        </div>
    </div>
  )
}

export default Banner