import Image from 'next/image'
import ReactMarkdown from 'react-markdown';
import { CustomHeading1, CustomParagraph, CustomLink } from '@/app/utils/markdown';

const Content = async ({id}) => {

    const res = await fetch('https://cms.parafiaandrzeja.pl/api/ogloszenias/' + id +'?populate=*', 
        { next: { revalidate: 0 }, headers: { 'Authorization': `Bearer ${process.env.CMS_API_TOKEN}` } });
    const data = res.ok && await res.json();

        // Przygotuj tekst tak, żeby pojedyncze entery \n traktować jako przerwę (Markdown wymaga podwójnego entera)
        const raw = data?.data?.tresc || '';
        const normalized = raw.replace(/\r\n/g, '\n');
        const collapsed = normalized.replace(/\n{2,}/g, '\n\n');
        const mdText = collapsed.replace(/\n(?!\n)/g, '\n\n');

        return (
            <div className='flex flex-col-reverse md:flex-row md:px-[5vw] bg-white md:pt-[20vh] pb-24'>
                {data ? (
                    <><div className='w-full md:w-1/2 px-[6vw] md:px-0 md:pr-[5vw]'>
                    <h1 className='text-2xl md:text-3xl font-header2 text-center my-4 md:mt-0'>{data.data.tytul}</h1>
                    <ReactMarkdown components={{ p: CustomParagraph, h1: CustomHeading1, a: CustomLink }}>{mdText}</ReactMarkdown>
                </div>
                <div className='flex w-full md:w-1/2 pl-[5vw] h-[300px] md:h-[50vh] relative'>
                    <Image fill alt="tlo ogloszenia" objectFit="cover" src={'https://cms.parafiaandrzeja.pl' + data.data.zdjecie.url}/>
                </div></>
                ) : <>Problem</>}
            </div>
        )
}

export default Content