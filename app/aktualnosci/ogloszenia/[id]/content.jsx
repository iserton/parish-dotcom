import Image from 'next/image'
import ReactMarkdown from 'react-markdown';

const Content = async ({id}) => {

    const CustomParagraph = ({ children }) => (
        <p className="text-base my-4">{children}</p>
      );
    
    const CustomHeading1 = ({ children }) => (
        <h1 className="text-xl font-header2 my-6">{children}</h1>
      );

    const res = await fetch('https://cms.parafiaandrzeja.pl/api/ogloszenias/' + id +'?populate=*', 
        { next: { revalidate: 0 }, headers: { 'Authorization': `Bearer ${process.env.CMS_API_TOKEN}` } });
    const data = res.ok && await res.json();

        return (
            
            <div className='flex flex-col-reverse md:flex-row md:px-[5vw] bg-white md:pt-[20vh] pb-24'>
                {data ? (
                    <><div className='w-full md:w-1/2 px-[5vw] md:px-0 md:pr-[5vw]'>
                    <h1 className='text-3xl font-header2 text-center my-4 md:mt-0'>{data.data.tytul}</h1>
                    <ReactMarkdown components={{ p: CustomParagraph, h1: CustomHeading1 }}>{data.data.tresc}</ReactMarkdown>
                </div>
                <div className='flex w-full md:w-1/2 pl-[5vw] h-[300px] md:h-[50vh] relative'>
                    <Image fill alt="tlo ogloszenia" objectFit="cover" src={'https://cms.parafiaandrzeja.pl' + data.data.zdjecie.url}/>
                </div></>
                ) : <>Problem</>}
                
                
            </div>
        )
}

export default Content