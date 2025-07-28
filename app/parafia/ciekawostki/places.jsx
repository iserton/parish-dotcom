import React from 'react'
import Image from 'next/image'

const Places = () => {
  return (
    <div className='w-full flex flex-col px-[5vw] my-[5vh] bg-white'>
        <div className='flex flex-col md:flex-row w-full  my-[5vh]'>
            <div className='hidden md:flex w-full md:w-1/2 h-[50vh] relative'>
                <Image fill objectFit='cover' className='pr-[5vw]' alt="zdjecie ilustrujace miejsce w kosciele" src="/ciekawostki1.jpg"/>
            </div>
            <div className="md:pl-[5vw] w-full md:w-1/2 h-full flex flex-col justify-center">
                <h2 className='text-[4.5vh] font-header2 text-center md:text-left'>Coroczna Stajenka</h2>
                <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative my-[1vh]'>
                    <Image fill objectFit='cover' className='' alt="zdjecie ilustrujace miejsce w kosciele" src="/ciekawostki1.jpg"/>
                </div>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                
            </div>
        </div>
        <div className='flex flex-col md:flex-row w-full  my-[5vh]'>
            
            <div className="pr-[5vw] w-full md:w-1/2 h-full flex flex-col justify-center">
                <h2 className='text-[4.5vh] font-header2 text-center md:text-left'>Kwiaty przy Obrazie</h2>
                <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative my-[1vh]'>
                    <Image fill objectFit='cover' className='' alt="zdjecie ilustrujace miejsce w kosciele" src="/ciekawostki2.jpg"/>
                </div>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                
            </div>
            <div className='hidden md:flex w-full md:w-1/2 h-[50vh] relative'>
                <Image fill objectFit='cover' className='md:pl-[5vw]' alt="zdjecie ilustrujace miejsce w kosciele" src="/ciekawostki2.jpg"/>
            </div>
        </div>
        <div className='flex flex-col md:flex-row w-full  my-[5vh]'>
            <div className='hidden md:flex w-full md:w-1/2 h-[50vh] relative'>
                <Image fill objectFit='cover' className='pr-[5vw]' alt="zdjecie ilustrujace miejsce w kosciele" src="/ciekawostki3.jpg"/>
            </div>
            <div className="md:pl-[5vw] w-full md:w-1/2 h-full flex flex-col justify-center">
                <h2 className='text-[4.5vh] font-header2 text-center md:text-left'>Wystrój Ołtarza</h2>
                <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative my-[1vh]'>
                    <Image fill objectFit='cover' className='' alt="zdjecie ilustrujace miejsce w kosciele" src="/ciekawostki3.jpg"/>
                </div>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                
            </div>
        </div>
        <div className='flex flex-col md:flex-row w-full  my-[5vh]'>
            
            <div className="pr-[5vw] w-full md:w-1/2 h-full flex flex-col justify-center">
                <h2 className='text-[4.5vh] font-header2 text-center md:text-left'>Prezenty Caritasu</h2>
                <div className='flex md:hidden w-full md:w-1/2 h-[40vh] relative my-[1vh]'>
                    <Image fill objectFit='cover' className='' alt="zdjecie ilustrujace miejsce w kosciele" src="/ciekawostki4.jpg"/>
                </div>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <p className='pt-[2vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                
            </div>
            <div className='hidden md:flex w-full md:w-1/2 h-[50vh] relative'>
                <Image fill objectFit='cover' className='md:pl-[5vw]' alt="zdjecie ilustrujace miejsce w kosciele" src="/ciekawostki4.jpg"/>
            </div>
        </div>
        
    </div>
  )
}

export default Places