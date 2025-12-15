import Ogloszenie from "@/app/components/ogloszenie"

const News = async () => {
    const res = await fetch('https://cms.parafiaandrzeja.pl/api/ogloszenias?sort=createdAt:desc&pagination[limit]=3&populate=*', { next: { revalidate: 0 }, headers: { 'Authorization': `Bearer ${process.env.CMS_API_TOKEN}` } })
    const data = res.ok && await res.json()

  return (

    <div id="first" className='w-full flex flex-col py-24 bg-white'>
            <div className={` w-full flex grid-cols-1 md:grid-cols-3 items-center justify-center flex-wrap gap-10 px-[2vw] md:px-[5vw]`}>
                {data.data.length > 0 ? (
                    <>
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
                    </>
                ) : <p>Nie znaleziono ogłoszeń.</p>}
            </div>
        
    </div>
  )
}

export default News