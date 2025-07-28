import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col justify-between w-full px-[5vw]  bg-dark text-white items-center py-[5vh]'>
         <h2 className='text-[5.5vh] font-header2 text-center'>Ślub W Naszej Parafii</h2>
        <div className='flex flex-col md:flex-col w-full justify-between items-center mt-[5vh]'>

        <p className='w-full'>Należy do kancelarii parafialnej dostarczyć aktualny ( dokument jest ważny
tylko 6 miesięcy) odpis aktu chrztu.</p>
        {/* <p className='w-full md:w-[40%] mt-[3vh] md:mt-0'>Termin chrztu jest ustalany wyłącznie w kancelarii parafialnej. Nie ustalamy terminu chrztu telefonicznie, drogą elektroniczną, ani w zakrystii. Zgłoszenie chrztu powinno się odbyć napóźniej w tygodniu przed planowanym terminem chrztu świętego.</p> */}
        </div>
    </div>
  )
}

export default Banner