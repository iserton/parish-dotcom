import ReactMarkdown from 'react-markdown';
import { CustomHeading1, CustomParagraph, CustomLink } from '@/app/utils/markdown';

const Info = async () => {
  const res = await fetch('https://cms.parafiaandrzeja.pl/api/koleda?populate=*', { next: { revalidate: 0 }, headers: { 'Authorization': `Bearer ${process.env.CMS_API_TOKEN}` } })
  const data = res.ok && await res.json()

  // Przygotuj tekst tak, żeby pojedyncze entery \n traktować jako przerwę (Markdown wymaga podwójnego entera)
  const raw = data?.data?.tresc || '';
  const normalized = raw.replace(/\r\n/g, '\n');
  const collapsed = normalized.replace(/\n{2,}/g, '\n\n');
  const mdText = collapsed.replace(/\n(?!\n)/g, '\n\n');


  return (
    <div id="first" className='w-full flex flex-col py-[10vh] bg-white'>
        <div  className={`w-full flex justify-center px-[2vw] md:px-[5vw]`}>
             {
                    data && data.data.tresc != "" ? (
                        <div className='w-full md:w-3/4 px-[5vw] md:px-0'>
                          <h1 className='text-3xl font-header2 text-center my-4 md:mt-0'>{data.data.tytul}</h1>
                          {data.data.updatedAt && (
                            <p className='text-sm text-gray-500 text-center mb-4'>
                              Ostatnia aktualizacja: {new Date(data.data.updatedAt).toLocaleString('pl-PL', { timeZone: 'Europe/Warsaw' })}
                            </p>
                          )}
                          <ReactMarkdown components={{ p: CustomParagraph, h1: CustomHeading1, a: CustomLink }}>{mdText}</ReactMarkdown>
                        </div>
                    ) : <p>Brak informacji o zbliżających się wizytach duszpasterskich.</p>
                }
        </div>           
    </div>
  )
}

export default Info