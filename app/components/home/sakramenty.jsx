import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Sakramenty = () => {

    const sakr = [
        { link: '/sakramenty/chrzest', name: 'Chrzest', image: '/baptism_white.png' },
        { link: '/sakramenty/pokuta', name: 'Pokuta', image: '/contrition_white.png' },
        { link: '/sakramenty/komunia', name: 'Eucharystia', image: '/communion_white.png' },
        { link: '/sakramenty/bierzmowanie', name: 'Bierzmowanie', image: '/bierzmowanie_white.png' },
        { link: '/sakramenty/malzenstwo', name: 'Małżeństwo', image: '/wedding-rings_white.png' },
        { link: '/sakramenty/namaszczenie', name: 'Namaszczenie', image: '/anointing_white.png' }
    ]

    return (
        <div className='w-full py-24 flex relative'>
                <Image src="/sakramenty_tlo.jpeg" alt="tlo sakramenty" fill={true} objectFit='cover'/> 
            <div className='z-10 w-full h-full px-[8vw] flex flex-col justify-center items-center text-white'>
                <h2 className='text-white text-3xl font-header2'>Sakramenty</h2>
                {/* <p className='text-white mt-[3vh]'>W naszym kosciel istnieje nie od dzis wiele roznych zgromadzen ktore zajmuja sie blah blah przerozny;mji rzeczami. Juz dzis mozesz dolaczyc i sie zaangazowac.</p> */}
                <div className='mt-8 flex justify-center text-white font-header2 text-2xl overflow-x-hidden w-full flex-wrap'>
                    {sakr.map((s, i) => (
                        <Link key={i} href={s.link}>
                            <div className='flex h-[200px] py-6  w-[60vw] md:w-[200px] hover:bg-white hover:bg-opacity-10 flex-col justify-center items-center m-4'>
                                <div className='h-3/5 relative w-1/2'>
                                    <Image src={s.image} alt="ikonka sakramenty" fill objectFit='contain'/>
                                </div>
                                <p className='text-center text-bold uppercase mt-4'>{s.name}</p>
                            </div>
                        </Link>
                    ))}
            </div>
        </div>
    </div>
    // <div className='flex flex-col w-full pb-[5vh] bg-white'>
    //     <h2 className='text-[4.5vh] text-center my-[5vh]'>Sakramenty</h2>
    //     <div className='flex flex-col w-full '>
    //         <div className='flex flex-row h-[30vh] w-full justify-center'>
    //             <Link href="/sakramenty/chrzest">
    //             <div className='flex flex-col h-full w-[17vw] mx-[5vw] border-4 border-white hover:border-black p-1  '>
    //                 <div className='w-full h-[35%] relative'>
    //                     <Image alt="ikonka " fill objectFit="contain" src="/baptism.png"/>
    //                 </div>
    //                 <h3 className='text-[2.3vh] text-center mt-[2vh] '>Chrzest Swiety</h3>
    //                 <p className='text-center mt-[1vh]'>Jest to sakrament, w którym ciężko chory otrzymuje przez namaszczenie olejem św. i modlitwę kapłana szczególne łaski, ulgę w cierpieniu, a niekiedy przywrócenie zdrowia.</p>
    //             </div>
    //             </Link>
    //             <Link href="/sakramenty/komunia">
    //             <div className='flex flex-col h-full w-[17vw] mx-[5vw] border-4 border-white hover:border-black p-1 '>
    //                 <div className='w-full h-[35%] relative'>
    //                     <Image alt="ikonka " fill objectFit="contain" src="/communion.png"/>
    //                 </div>
    //                 <h3 className='text-[2.3vh] text-center mt-[2vh]'>Eucharystia</h3>
    //                 <p className='text-center mt-[1vh] '>Jest to sakrament, w którym ciężko chory otrzymuje przez namaszczenie olejem św. i modlitwę kapłana szczególne łaski, ulgę w cierpieniu, a niekiedy przywrócenie zdrowia.</p>
    //             </div>
    //             </Link>
    //             <Link href="/sakramenty/bierzmowanie">
    //             <div className='flex flex-col h-full w-[17vw] mx-[5vw] border-4 border-white hover:border-black p-1 '>
    //                 <div className='w-full h-[35%] relative'>
    //                     <Image alt="ikonka " fill objectFit="contain" src="/bierzmowanie.png"/>
    //                 </div>
    //                 <h3 className='text-[2.3vh] text-center mt-[2vh]'>Bierzmowanie</h3>
    //                 <p className='text-center mt-[1vh] '>Jest to sakrament, w którym ciężko chory otrzymuje przez namaszczenie olejem św. i modlitwę kapłana szczególne łaski, ulgę w cierpieniu, a niekiedy przywrócenie zdrowia.</p>
    //             </div>
    //             </Link>
    //         </div>
    //         <div className='flex flex-row h-[30vh] w-full justify-center'>
    //             <Link href="/sakramenty/pokuta">
    //             <div className='flex flex-col h-full w-[17vw] mx-[5vw] border-4 border-white hover:border-black p-1 '>
    //                 <div className='w-full h-[35%] relative'>
    //                     <Image alt="ikonka " fill objectFit="contain" src="/contrition.png"/>
    //                 </div>
    //                 <h3 className='text-[2.3vh] text-center mt-[2vh]'>Pokuta</h3>
    //                 <p className='text-center mt-[1vh] '>Jest to sakrament, w którym ciężko chory otrzymuje przez namaszczenie olejem św. i modlitwę kapłana szczególne łaski, ulgę w cierpieniu, a niekiedy przywrócenie zdrowia.</p>
    //             </div>
    //             </Link>
    //             <Link href="/sakramenty/malzenstwo">
    //             <div className='flex flex-col h-full w-[17vw] mx-[5vw] border-4 border-white hover:border-black p-1 '>
    //                 <div className='w-full h-[35%] relative'>
    //                     <Image alt="ikonka " fill objectFit="contain" src="/wedding-rings.png"/>
    //                 </div>
    //                 <h3 className='text-[2.3vh] text-center mt-[2vh]'>Malzenstwo</h3>
    //                 <p className='text-center mt-[1vh] '>Jest to sakrament, w którym ciężko chory otrzymuje przez namaszczenie olejem św. i modlitwę kapłana szczególne łaski, ulgę w cierpieniu, a niekiedy przywrócenie zdrowia.</p>
    //             </div>
    //             </Link>
    //             {/* <Link href="/sakramenty/kaplanstwo">
    //             <div className='flex flex-col h-full w-[17vw] mx-[5vw] border-4 border-white hover:border-black p-1 '>
    //                 <div className='w-full h-[35%] relative'>
    //                     <Image alt="ikonka " fill objectFit="contain" src="/pope.png"/>
    //                 </div>
    //                 <h3 className='text-[2.3vh] text-center mt-[2vh]'>Kaplanstwo</h3>
    //                 <p className='text-center mt-[1vh] '>Jest to sakrament, w którym ciężko chory otrzymuje przez namaszczenie olejem św. i modlitwę kapłana szczególne łaski, ulgę w cierpieniu, a niekiedy przywrócenie zdrowia.</p>
    //             </div>
    //             </Link> */}
    //             <Link href="/sakramenty/namaszczenie">
    //             <div className='flex flex-col h-full w-[17vw] mx-[5vw] border-4 border-white hover:border-black p-1 '>
    //                 <div className='w-full h-[35%] relative'>
    //                     <Image alt="ikonka " fill objectFit="contain" src="/anointing.png"/>
    //                 </div>
    //                 <h3 className='text-[2.3vh] text-center mt-[2vh]'>Namaszczenie Chorych</h3>
    //                 <p className='text-center mt-[1vh] '>Jest to sakrament, w którym ciężko chory otrzymuje przez namaszczenie olejem św. i modlitwę kapłana szczególne łaski, ulgę w cierpieniu, a niekiedy przywrócenie zdrowia.</p>
    //             </div>
    //             </Link>
    //         </div>
    //         {/* <div className='flex flex-row h-[30vh] w-full justify-center'>
    //             <Link href="/sakramenty/namaszczenie">
    //             <div className='flex flex-col h-full w-[17vw] mx-[5vw] border-4 border-white hover:border-black p-1 '>
    //                 <div className='w-full h-[35%] relative'>
    //                     <Image alt="ikonka " fill objectFit="contain" src="/anointing.png"/>
    //                 </div>
    //                 <h3 className='text-[2.3vh] text-center mt-[2vh]'>Namaszczenie Chorych</h3>
    //                 <p className='text-center mt-[1vh] '>Jest to sakrament, w którym ciężko chory otrzymuje przez namaszczenie olejem św. i modlitwę kapłana szczególne łaski, ulgę w cierpieniu, a niekiedy przywrócenie zdrowia.</p>
    //             </div>
    //             </Link>
    //         </div> */}
    //     </div>

    // </div>
  )
}

export default Sakramenty