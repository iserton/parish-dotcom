import React from 'react'
import Image from 'next/image'

const Citations = async () => {
  const res = await fetch('https://twojabiblia.pl/wp-json/tbapi/v1/get_quote/MA==', { next: { revalidate: 0 } });
  const data = res.ok && await res.json();
  return (
    <div className="flex w-full py-24 justify-center items-center relative flex flex-col">
        <Image src="/cytaty2.jpeg" alt="tlo kosciola" fill={true} objectFit='cover'/>
        {data.body_response ? (
          <div className={`border-2 rounded-xl h-auto w-[80%] md:w-[40%] z-10 flex flex-col justify-center items-center p-[5vh] pb-[3vh]`}>
            <div className='relative h-[3vh] w-[10%] mb-[3vh]'>
                <Image alt="ikonka cytat" src="/quotation-marks.png" fill={true} objectFit='contain'></Image>
            </div>
            <p className='text-white text-center text-xl'>{data.body_response.content}</p>
            <div className='text-gold1 text-center mt-4 text-base' dangerouslySetInnerHTML={{__html: data.body_response.siglum.replace("<a", "<a target='_blank'")}}></div>
            <p className='text-white text-center text-xs mt-4'>Źródło: <a href="https://twojabiblia.pl/" target='_blank' className='text-gold1'>twojabiblia.pl</a></p>
          </div>
        ) : null}

        {/* {post2 !== null ? (
          <div key={post2.id} className={`border-[2px] h-auto w-[80%] md:w-[40%] z-10 flex flex-col justify-center items-center p-[5vh] ${post2.id == activeIndex ? '' : 'hidden'}`}>
            <div className='relative h-[3vh] w-[10%] mb-[3vh]'>
                <Image alt="ikonka cytat" src="/quotation-marks.png" fill={true} objectFit='contain'></Image>
            </div>
            <p className='text-white text-center text-[2.2vh]'>{post2.text}</p>
            <p className='text-gold1 text-center mt-[2vh] text-[2vh]'>{post2.author}</p>
          </div>
        ) : null}

          {post3 !== null ? (
          <div key={post3.id} className={`border-[2px] h-auto w-[80%] md:w-[40%] z-10 flex flex-col justify-center items-center p-[5vh] ${post3.id == activeIndex ? '' : 'hidden'}`}>
            <div className='relative h-[3vh] w-[10%] mb-[3vh]'>
                <Image alt="ikonka cytat" src="/quotation-marks.png" fill={true} objectFit='contain'></Image>
            </div>
            <p className='text-white text-center text-[2.2vh]'>{post3.text}</p>
            <p className='text-gold1 text-center mt-[2vh] text-[2vh]'>{post3.author}</p>
          </div>
        ) : null} */}
      {/* <div className="flex items-center space-x-2 z-10 mt-[8vh]">
      {[1,2,3].map((index) => (
        <div
          key={index}
          className={`w-[2vh] h-[2vh] rounded-full cursor-pointer ${
            index === activeIndex
              ? 'bg-gold1' // Active dot is gold background
              : 'border border-gold1' // Inactive dots have gold border
          }`}
          onClick={() => handleDotClick(index)}
        ></div>
      ))}
    </div> */}
    </div> 
  )
}

export default Citations