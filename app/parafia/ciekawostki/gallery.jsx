// import React from 'react'
// import Image from 'next/image'
// const Gallery = () => {
//   return (
//     <div className='w-full px-[5vw] py-[10vh] grid grid-cols-2 h-[90vh] gap-4 bg-white'>
//         <div className='relative h-full w-full'>
//             <Image src="/kosciol5.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
//         </div>
//         <div className='grid grid-cols-2 h-full gap-4'>
//             <div className='relative'>
//                 <Image src="/kosciol4.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
//             </div>
//             <div className='relative h-full w-full'>
//                 <Image src="/kosciol2.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
//             </div>
//             <div className='relative h-full w-full'>
//                 <Image src="/kosciol3.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
//             </div>
//             <div className='relative h-full w-full'>
//                 <Image src="/nawa2.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
//             </div>

//         </div>
//     </div>
//   )
// }

// export default Gallery

import React from 'react'
import Image from 'next/image'
const Gallery = () => {
  return (
    <div className='w-full px-[5vw] grid grid-cols-1 md:grid-cols-2 h-[90vh] py-[10vh] md:h-[80vh] gap-4 bg-white'>
        <div className='relative h-full w-full'>
            <Image src="/kosciol5.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
        </div>
        <div className='grid grid-cols-2 h-full gap-4'>
            <div className='relative'>
                <Image src="/kosciol4.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
            </div>
            <div className='relative h-full w-full'>
                <Image src="/kosciol3.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
            </div>
            <div className='relative h-full w-full'>
                <Image src="/kosciol2.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
            </div>
            <div className='relative h-full w-full'>
                <Image src="/nawa2.jpeg" alt="zdjecie schola" fill objectFit='cover'/>
            </div>

        </div>
    </div>
  )
}

export default Gallery