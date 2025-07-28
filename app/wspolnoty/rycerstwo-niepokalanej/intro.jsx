import React from 'react'
import Image from 'next/image'
const Intro = () => {
  return (
    <div id="first" className='flex flex-col md:flex-row w-full py-[5vh] md:py-[10vh] px-[5vw] bg-white'>
        <div className='w-1/2  relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/ryc1.jpeg" alt="schola"/>
        </div>
        <div className="h-full w-full md:w-1/2 flex flex-col justify-center">
            <h2 className='text-[4.5vh] font-header2'>Kim jesteśmy i jak działamy?</h2>
            <p className='mt-[5vh] text-[1.7vh] mt-[1vh]'>Rycerstwo Niepokalanej, będące wyrazem oddania Matce Bożej Niepokalanej, tworzy niezwykłą wspólnotę, której członkowie kierują swoje starania ku nawróceniu i uświęceniu swojego życia. Po przeżytym nawróceniu i podjęciu osobistego procesu uświęcenia, wypełniają swoje serca misją Kościoła, adaptując ją do swojego życia codziennego.</p>
            <p className='mt-[2vh] text-[1.7vh] mt-[1vh]'>Ich pragnienie nie ogranicza się do wewnętrznej przemiany, ale rozszerza się na nieśenie Ewangelii Chrystusa na szerokie wody społeczeństwa, stając się źródłem nadziei i odnowy dla ludzi. Jako rycerze Niepokalanej, czują się wezwani do głoszenia tej Ewangelii jako drogi prowadzącej do zbawienia i pełni życia, pragnąc przywracać wiarę i nadzieję w sercach wielu.</p>
            <p className='mt-[2vh] text-[1.7vh] mt-[1vh]'>W ich służbie dla Matki Bożej, inspirują innych do podążania drogą świętości i poświęcenia, czyniąc ze swojego życia i działalności prawdziwe świadectwo miłości Bożej.</p>
            {/* <p className='mt-[2vh]'>Nie śpiewamy dla siebie – to pomaga zrozumieć nasze miejsce w Kościele.</p> */}
            {/* <p className='mt-[2vh]'>W naszym repertuarze są liturgiczne i religijne pieśni dominikańskie, tradycyjne, jak i współczesnych kompozytorów.</p> */}
            {/* <p className='mt-[2vh]'>Śpiewamy również „na zaproszenie” na różnych uroczystościach (np. śluby, pierwsze komunie, pogrzeby). Zebrane fundusze przeznaczamy wyłącznie na nasz rozwój – szkoląc nasze głosy pod kierownictwem specjalistów z Uniwersytetu Muzycznego im. Fryderyka Chopina lub na warsztatach organizowanych przez inne chóry i parafie.</p> */}
        </div>
        <div className='md:hidden h-[40vh] w-full mt-[5vh] relative'>
            <Image className='pr-[5vw]' fill objectFit='cover' src="/ryc1.jpeg" alt="schola"/>
        </div>
    </div>
  )
}

export default Intro