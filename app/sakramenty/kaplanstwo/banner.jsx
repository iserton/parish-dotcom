import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col justify-between w-full px-[5vw]  bg-dark text-white items-center py-[5vh]'>
         <h2 className='text-[5.5vh] font-header2 text-center'>Chrzest W Naszej Parafii</h2>
        <div className='flex flex-col md:flex-row w-full justify-between items-center mt-[5vh]'>

        <p className='w-full md:w-[40%]'>– w pierwszą, trzecią i piątą niedzielę miesiąca po Mszy świętej o 12.00 (rodzice i chrzestni uczestniczą we Mszy, a po niej sprawowany jest sakrament),
– w drugą i czwartą niedzielę miesiąca podczas Mszy świętej o 12.00
W wyjątkowych przypadkach, po indywidualnej decyzji Księdza Proboszcza, istnieje możliwość udzielenia sakramentu chrztu świętego w sobotę po Mszy świętej o 12.00 (za wyjątkiem pierwszej soboty miesiąca i innych uroczystości odbywających się w Świątyni).</p>
        <p className='w-full md:w-[40%] mt-[3vh] md:mt-0'>Termin chrztu jest ustalany wyłącznie w kancelarii parafialnej. Nie ustalamy terminu chrztu telefonicznie, drogą elektroniczną, ani w zakrystii. Zgłoszenie chrztu powinno się odbyć napóźniej w tygodniu przed planowanym terminem chrztu świętego.</p>
        </div>
    </div>
  )
}

export default Banner