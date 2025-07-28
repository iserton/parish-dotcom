import React from 'react'

const Detailed = () => {
  return (
    <div className='w-full h-[30vh] px-[5vw] flex flex-row bg-white'>
        <div className='h-full w-1/2 pr-[5vw] items-center flex'>
            <h2 className='text-[4.5vh] font-header2'>Long heading is what you see here in this feature section</h2>
        </div>
        <div className='h-full w-1/2 flex flex-col items-center justify-center'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
            <p className='mt-[3vh]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.</p>
        </div>
    </div>
  )
}

export default Detailed