import React from 'react'
import Image from 'next/image'

const Loader = () => {
  return (
    <div className={`flex w-full h-screen bg-dark items-center justify-center`}>
        <div className="w-[20%] h-[35%] flex relative">
            <Image src="/kosciol_logo.png" alt="logo kosciola" fill={true} object-fit="contain"/>
        </div>
        
    </div>
  )
}

export default Loader