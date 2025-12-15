import React from 'react'
import Link from 'next/link'
import Ogloszenie from '../ogloszenie'

const News = async () => {
    const res = await fetch('https://cms.parafiaandrzeja.pl/api/ogloszenias?sort=createdAt:desc&pagination[limit]=3&populate=*', { next: { revalidate: 0 }, headers: { 'Authorization': `Bearer ${process.env.CMS_API_TOKEN}` } })
    const data = res.ok && await res.json()

  return (
    <div className='flex flex-col w-full py-24 items-center justify-center bg-white text-black'>
        <h2 className='text-3xl font-header2'>Aktualności</h2>
        
            {data.data.length > 0  ? (
                <>
                <div className='flex flex-col md:flex-row w-full items-center justify-center flex-wrap mt-8'>

            {data.data.map(news => (
                <Ogloszenie
                  key={news.documentId}
                  title={news.tytul}
                  date={news.createdAt.split("T")[0]}
                  imageUrl={news.zdjecie ? 'https://cms.parafiaandrzeja.pl' + news.zdjecie.url : null}
                  href={`/aktualnosci/ogloszenia/${news.documentId}`}
                  type={news.typ}
                />
            ))}

            </div>
        
        <Link href="/aktualnosci/ogloszenia">
            <button className='p-4 bg-dark text-white mt-6'>Zobacz więcej</button>
        </Link>
        </>
            ) : <div className='mt-8'>Nie znaleziono ogłoszeń.</div>}
    </div>
  )
}

export default News