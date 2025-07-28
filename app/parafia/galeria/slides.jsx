'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

const Slides = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch('https://parafia.bieda.it/api/galerias?populate=*')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            data.data.sort((a, b) => new Date(b.attributes.data) - new Date(a.attributes.data));
            const toSet = []
            data.data.forEach((object) => {toSet.push({
                id: object.id,
                tytul: object.attributes.tytul,
                img: object.attributes.glowne.data.attributes.url,
                })
            })
            setData(toSet)
        })
    }, [])
  return (
    <div id="first" className='w-full grid grid-cols-1 md:grid-cols-4 gap-4 bg-white px-[5vw] py-[10vh]'>
        {data && data.map((object) => (

            <div key="" className='w-full h-[30vh]'>
                <Link href={`/parafia/galeria/${object.id}`}>
                <div className='w-full h-full relative bg-black'>
                    <Image className="bg-opacity-50" src={`https://parafia.bieda.it${object.img}`} fill objectFit='cover' alt="zdjecie tytulowe z galerii" />
                    {/* Dark background layer with 50% opacity */}
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                    {/* Centered h2 tag */}
                    <h2 className="absolute inset-0 flex items-center justify-center text-white text-center text-[30px] font-header2">
                        {object.tytul}
                    </h2>
                </div>
                </Link>
            </div>
        ))}
        
    </div>
  )
}

export default Slides