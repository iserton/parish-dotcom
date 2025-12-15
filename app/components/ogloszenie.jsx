import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Ogloszenie = ({ title, date, imageUrl, href, type }) => {
  return (
    <Link href={href} className='group w-3/4 md:w-96 px-1 py-3 mx-2 mt-6 md:mt-0 shrink-0'>
      <article className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col'>
        <div className='relative w-full h-[25vh] md:h-[30vh] overflow-hidden'>
          {type && (
            <span className='absolute top-3 left-3 text-white text-sm md:text-md px-3 py-1 rounded-md border-2 border-gray-200 shadow-sm uppercase z-10'>
              {type}
            </span>
          )}
          {imageUrl ? (
            <Image alt={title || 'ogłoszenie'} fill src={imageUrl} className='object-cover transform transition-transform duration-500 group-hover:scale-105' />
          ) : (
            <div className='bg-gray-200 w-full h-full' />
          )}
        </div>
        <div className='p-4 flex-1 flex flex-col justify-between'>
          <div>
            <h3 className='font-bold text-2xl mb-2 text-center font-header2'>{title}</h3>
          </div>
          <div className='flex justify-between mt-2 text-gold2'>
            <p className='text-sm md:text-base'>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Ogloszenie
