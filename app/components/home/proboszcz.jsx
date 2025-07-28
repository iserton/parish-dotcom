import React from 'react'
import Image from 'next/image'
const Proboszcz = () => {
  return (
    <div className='w-full  flex flex-col md:flex-row bg-white pt-[5vh]'>
        <div className='flex flex-col w-full md:w-[50%] h-full justify-center pl-[5vw] md:pl-[10%] text-black'>
            <h1 className='text-[3.8vh] text-bold font-header2'>Proboszcz</h1>
            <h2 className='text-[5.5vh] font-header2'>Ks. Paweł Powierza</h2>
            <div className='flex md:hidden w-full md:w-[35%] h-[30vh] relative md:ml-[10%] '>
            {/* <Image src="/slipek_sekcja_no_bg.png" alt="zdjecie proboszcza" fill={true} objectFit='cover'></Image> */}
                <Image src="/slipek_sekcja_removed_2.png" alt="zdjecie proboszcza" fill={true} objectFit='cover' className='h-full'></Image>
            </div>
            <p className='mt-[2vh] md:mt-[5vh] text-[1.8vh]'>W roku 2001 kardynał Józef Glemp zlecił księdzu Leszkowi Slipkowi zarząd nad wiernymi parafii Świętego Andrzeja Apostoła w tym wszystkim, co się odnosi do głoszenia Słowa Bożego, administrowania sakramentów świętych, odprawiania nabożeństw, jako i w rzeczach z tymi trzema obowiązkami zwykle się łączących. Biskup polecił mu troszczyć się o zbawienie dusz pieczy jego powierzonych przy użyciu środków przez Chrystusa i Kościół ustanowionych.</p>
            <p className='mt-[2vh] text-[1.8vh]'>Proboszcz z powodu znacznej liczby parafian sam uczynić zadość obowiązkom swoim nie może, dlatego ma pomocników: dwóch wikariuszy i jednego rezydenta (to znaczy tego, który w parafii przemieszkuje).</p>
            <p className='mt-[2vh] text-[1.8vh]'>Zarządzająca domem (plebanią), czyli tak zwana gospodyni, zgodnie z konstytucją Benedykta XIV i uchwałami synodów jest niewiastą o wypróbowanej uczciwości i „w podeszłym wieku, to jest powyżej 40 lat”.</p>
            <div className='h-[10vh] w-[30%] relative mt-[3vh] mb-[3vh]'>
                <Image alt="podpis" src="/podpis_slipek.png" fill={true} objectFit='contain'/>
            </div>
        </div>
        <div className='flex w-full md:w-[35%] relative ml-[10%] '>
            {/* <Image src="/slipek_sekcja_no_bg.png" alt="zdjecie proboszcza" fill={true} objectFit='cover'></Image> */}
            <Image src="/slipek_sekcja_removed_2.png" alt="zdjecie proboszcza" fill={true} objectFit='cover' className='h-full'></Image>
        </div>
    </div>
//     <div className='w-full flex bg-white pt-[5vh]'>
//     <div className='flex flex-col flex-1 justify-center pl-[10%]'>
//         <h1 className='text-[5.5vh] text-bold font-header2'>Leszek Slipek</h1>
//         <h2 className='text-[35px] font-header2'>Ksiądz Proboszcz</h2>
//         <p className='mt-[5vh]'> 

//          </p>


//         <div className='flex-1 relative mt-[2vh] mb-[5vh]'>
//             <Image alt="podpis" src="/signing.png" fill={true} objectFit='contain'/>
//         </div>
//     </div>
//     <div className='flex w-[30%] relative ml-[10%]'>
//         <Image src="/slipek_sekcja_removed.png" alt="zdjecie proboszcza" fill={true} objectFit='cover' className='h-full'></Image>
//     </div>
// </div>

  )
}
export default Proboszcz
