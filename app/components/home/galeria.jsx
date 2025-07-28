'use client'
import { useState, useEffect } from 'react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Galeria = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        fetch('https://parafia.bieda.it/api/last-galleries')
        .then(res => res.json())
        .then(data => {
            const toSet = []
            data.forEach((object) => {toSet.push({img: object.glowne.url, id: object.id})})
            setData(toSet)
        })
    }, [])
    if (data == null) {
        return (<div>Problem</div>)
    }
  else return (
    <div className='flex w-full h-[110vh] md:h-[70vh] flex flex-row bg-white '>
        <div className='hidden md:flex flex-col w-[50%] h-full'>
            <div className={`flex relative h-[50%] w-full`}>
                <Link href={`/parafia/galeria/${data[0].id}`}>
                    <Image className="p-1" src={`https://parafia.bieda.it${data[0].img}`} alt="zdjecie galeria" objectFit='cover' fill={true} />
                </Link>
            </div>
            <div className='w-full h-[50%] flex flex-row '>
                <div className={`flex relative h-full w-[50%]`}>
                <Link href={`/parafia/galeria/${data[1].id}`}>
                    <Image className="p-1" src={`https://parafia.bieda.it${data[1].img}`} alt="zdjecie galeria" objectFit='cover' fill={true} />
                </Link>
                </div>
                <div className={`flex relative h-full w-[50%] p-[5vh]`}>
                <Link href={`/parafia/galeria/${data[2].id}`}>
                    <Image className="p-1" src={`https://parafia.bieda.it${data[2].img}`} alt="zdjecie galeria" objectFit='cover' fill={true} />
                </Link>
                </div>
            </div>
        </div>
        <div className='hidden md:flex flex flex-col w-[50%] h-full'>
            <div className='flex h-[50%] w-full flex flex-row'>
                <div className={`flex relative h-full w-[50%]`}>
                <Link href={`/parafia/galeria/${data[3].id}`}>
                    <Image className="p-1" src={`https://parafia.bieda.it${data[3].img}`} alt="zdjecie galeria" objectFit='cover' fill={true} />
                </Link>
                </div>
                <div className={`flex relative h-full w-[50%]`}>
                <Link href={`/parafia/galeria/${data[4].id}`}>
                    <Image className="p-1" src={`https://parafia.bieda.it${data[4].img}`} alt="zdjecie galeria" objectFit='cover' fill={true} />
                </Link>
                </div>
            </div>
            <div className={`flex relative h-[50%] w-full`}>
            <Link href={`/parafia/galeria/${data[5].id}`}>
                    <Image className="p-1" src={`https://parafia.bieda.it${data[5].img}`} alt="zdjecie galeria" objectFit='cover' fill={true} />
                </Link>
            </div>
        </div>

        <div className='w-full flex md:hidden  flex-col '>
            <div className={`flex relative h-[50%] w-full`}>
                <Link href={`/parafia/galeria/${data[0].id}`}>
                    <Image className="p-1" src={`https://parafia.bieda.it${data[0].img}`} alt="zdjecie galeria" objectFit='cover' fill={true} />
                </Link>
            </div>
            <div className='w-full h-[50%] flex flex-row '>
                <div className={`flex relative h-full w-[50%]`}>
                <Link href={`/parafia/galeria/${data[1].id}`}>
                    <Image className="p-1" src={`https://parafia.bieda.it${data[1].img}`} alt="zdjecie galeria" objectFit='cover' fill={true} />
                </Link>
                </div>
                <div className={`flex relative h-full w-[50%] p-[5vh]`}>
                <Link href={`/parafia/galeria/${data[2].id}`}>
                    <Image className="p-1" src={`https://parafia.bieda.it${data[2].img}`} alt="zdjecie galeria" objectFit='cover' fill={true} />
                </Link>
                </div>
            </div>
            <div className={`flex relative h-[50%] w-full`}>
            <Link href={`/parafia/galeria/${data[5].id}`}>
                    <Image className="p-1" src={`https://parafia.bieda.it${data[5].img}`} alt="zdjecie galeria" objectFit='cover' fill={true} />
                </Link>
            </div>
            <div className='flex h-[50%] w-full flex flex-row'>
                <div className={`flex relative h-full w-[50%]`}>
                <Link href={`/parafia/galeria/${data[3].id}`}>
                    <Image className="p-1" src={`https://parafia.bieda.it${data[3].img}`} alt="zdjecie galeria" objectFit='cover' fill={true} />
                </Link>
                </div>
                <div className={`flex relative h-full w-[50%]`}>
                <Link href={`/parafia/galeria/${data[4].id}`}>
                    <Image className="p-1" src={`https://parafia.bieda.it${data[4].img}`} alt="zdjecie galeria" objectFit='cover' fill={true} />
                </Link>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Galeria