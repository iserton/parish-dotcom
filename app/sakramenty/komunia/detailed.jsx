import React from 'react'

const Detailed = () => {
  return (
    <div className='w-full py-[5vh] md:py-[10vh] px-[5vw] flex flex-col md:flex-row bg-white'>
        <div className='h-full w-full md:w-1/2 pr-[5vw] items-center flex'>
            <h2 className='text-[4.5vh] font-header2'>Wymagania do przystąpienia do sakramentu</h2>
        </div>
        <div className='h-full w-full md:w-1/2 flex flex-col items-center justify-center text-black text-[1.7vh]'>
            <p>Ważnym elementem przygotowania do chrztu świętego jest też udział obojga rodziców i chrzestnych (o ile to możliwe) w konferencji przedchrzcielnej. Odbywają się one w każdą sobotę o 19.00 w budynku Instytutu Papieża Jana Pawła II (sala konferencyjna I). W konferencji powinni też wziąć udział parafianie, którzy będą chrzestnymi w innej parafii. </p>
            <p className='mt-[3vh]'>Zachęcamy do roztropnego wybierania chrzestnych tak, by mogli być wzorem życia wiary dla powierzonych ich opiece dzieci i wsparciem dla rodziców w wychowaniu dziecka w wierze. Nie mogą być chrzestnymi osoby żyjące stale i dobrowolnie w stanie grzechu ciężkiego (np. w powtórnym związku małżeńskim, mieszkające razem przed ślubem) lub nie przystępujące do sakramentu pokuty z innych powodów.</p>
        </div>
    </div>
  )
}

export default Detailed