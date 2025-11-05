import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <div className={`bg-dark w-full h-auto text-white flex flex-col pt-14 pb-6 px-[5vw]`}>
        <div className='flex flex-col md:flex-row'>
        <div className={`flex flex-col w-full h-full md:w-[15%]`}>
            <div className={`w-full h-[120px] md:h-[30vh] relative`}>
                <Image alt="logo kosciola" src="/kosciol_logo.png" fill={true} objectFit='contain'></Image>
            
            </div>
            
        </div>
        <div className='flex flex-col-reverse w-full items-center md:items-stretch md:flex-row gap-10 md:gap-0 md:justify-between mt-6 md:mt-0'>
             <div className={`w-full md:w-[30%] flex items-center md:items-stretch flex-col md:ml-[3vw] justify-center`}>
                    <h3 className='font-bold text-2xl'>Adres</h3>
                    <p>Chłodna 9</p>
                    <p>00-891 Warszawa</p>
                    <h2 className='font-bold text-2xl mt-6 '>Kontakt</h2>
                    <p>parafia@parafiaandrzeja.pl</p>
                    <p>22 620 37 47</p>

                <div className='w-[200px] h-[24px] relative flex flex-row mt-6'>
                
                <div className='relative w-1/3 h-full'>
                    <a className='w-full h-full' href="https://www.instagram.com/parafiaandrzeja/" target='_blank'>
                        <Image src="/instagram.png" alt="ikonka instagrama" fill={true} objectFit='contain'></Image>
                    </a>
                </div>
                
                
                <div className='relative w-1/3 h-full'>
                    <a className="w-full h-full" href="https://www.youtube.com/channel/UCD90BZIQ_i3qlxrbP-W-ksA" target='_blank'>
                        <Image src="/youtube.png" alt="ikonka youtube" fill={true} objectFit='contain'></Image>
                    </a>
                </div>
                
                
                <div className='relative w-1/3 h-full'>
                    <a className='w-full h-full' href='https://www.facebook.com/ParafiaAndrzeja' target='_blank'>
                        <Image src="/facebook.png" alt="ikonka facebooka" fill={true} objectFit='contain'></Image>
                    </a>
                </div>
                
        </div>
            
        </div>
        {/* <div className='flex flex-col md:flex-row gap-10 md:gap-0 '> */}
        {/* <div className='flex flex-col items-center md:items-stretch w-full md:w-[30%] md:ml-[2vw] md:pr-[2vw] border-b-[2px] pb-[2vh] md:pb-0 md:border-b-[0px] md:border-r-[2px]'>
            <h3 className='font-bold text-[2.3vh]'>Msze Święte</h3>
            <div className='w-full flex justify-center md:justify-start flex-row mt-[2vh]'>
                <div>
                    <h4>Dni powszednie</h4>
                    <p className='mt-[2vh]'>6:30</p>
                    <p>8:00</p>
                    <p>9:00*</p>
                    <p>18:00</p>
                </div>
                <div className='ml-[2vw]'>
                    <h4>Niedziele i Święta</h4>
                    <p className='mt-[2vh]'>7:00*</p>
                    <p>8:30</p>
                    <p>10:00</p>
                    <p>11:30 (Rodzinna)</p>
                    <p>13:00</p>
                    <p>18:00</p>
                </div>
            </div>
            <div>
                <p className='mt-[2vh] text-[#ff0000]'>* brak mszy w okresie wakacyjnym</p>
            </div>
        </div>
        <div className='w-full md:w-[20%] md:mx-[2vw] flex flex-col border-b-[2px] items-center md:items-stretch md:border-b-[0px] pb-[2vh] md:pb-0 mt-[2vh] md:mt-0'>
            <h3 className='font-bold text-[2.3vh]'>Spowiedź</h3>
            <p className='mt-[2vh]'>Dni tygodnia: 30 min. przed Mszą Św.</p>
            <p className='mt-[2vh]'>Sobota: 16:00-18:00 w dolnym kościele</p>
            <p className='mt-[2vh]'>Niedziela: 8:00-13:00 w dolnym kościele</p>
        </div> */}

        
        <iframe className='w-3/5 rounded-xl hidden md:inline-block' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d327.3313466167734!2d20.992228354675344!3d52.238162823798994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc865a66dd77%3A0x787bfcd0383976fd!2sRoman%20Catholic%20Parish%20of%20St.%20Andrew%20the%20Apostle!5e0!3m2!1sen!2spl!4v1700818752335!5m2!1sen!2spl" width="100%" height="100%"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

        

        </div>
       
        </div>
        <div className='mt-6 w-full flex flex-col'>
            <p className='text-center'><Link href="/bibliografia">Bibliografia zdjęć</Link></p>
                <p className='text-center mt-4'>© {year} – Wszelkie prawa zastrzeżone</p>
                <p className='mt-4 text-center'>Developed by - <a href='https://filipolszewski.co.uk'>Filip Olszewski</a> / <span className='whitespace-nowrap'>Szymon Żebrowski</span></p>
            </div>


            {/* 
            <div className='flex md:hidden flex-col w-full '>
            <div className='flex flex-row  text-white'>
                <div className='pr-[1vw] border-r-[2px]'>
                    <h4 className='font-bold text-[2.3vh]'>Niedziele i Święta</h4>
                    <p className='mt-[2vh]'>7:00</p>
                    <p>8:30</p>
                    <p>10:00</p>
                    <p>11:30 (Rodzinna)</p>
                    <p>13:00</p>
                    <p>18:00</p>
                </div>

                <div className='px-[1vw]'>
                    <h4 className='font-bold text-[2.3vh]'>Dni powszednie</h4>
                    <p className='mt-[2vh]'>6:30</p>
                    <p>8:00</p>
                    <p>9:00</p>
                    <p>18:00</p>
                </div>
                
                <div className='pl-[1vw] border-l-[2px]'>
                    <h3 className='font-bold text-[2.3vh]'>Spowiedź</h3>
                    <p className='mt-[2vh]'>Dni tygodnia: 30 min. przed Mszą Św.</p>
                    <p className='mt-[2vh]'>Sobota: 16:00-18:00 w dolnym kosściele</p>
                    <p className='mt-[2vh]'>Niedziela: 8:00-13:00 w dolnym kościele</p>
                </div>
            </div>


            <div className={`w-full flex flex-row gap-4`}>
                    <div>

                    <h3 className='font-bold text-[2.3vh]'>Adres</h3>
                    <p>Chłodna 9</p>
                    <p>00-891 Warszawa</p>
                    </div>
                    <div>

                    <h2 className='font-bold text-[2.3vh] '>Kontakt</h2>
                    <p>parafianachlodnej@gmail.com</p>
                    <p>22 620 37 47</p>
                    </div>
            
            </div>
            

                <div className='w-full md:w-[10vw] h-[10vh] md:h-auto relative flex flex-row md:flex-col ml-[2vw]'>
                    
                    <div className='relative w-[30%] h-full'>
                        <a className='w-full h-full' href="https://www.instagram.com/parafiaandrzeja/">
                            <Image src="/instagram.png" alt="ikonka instagrama" fill={true} objectFit='contain'></Image>
                        </a>
                    </div>
                    
                    
                    <div className='relative w-[30%] h-full'>
                        <a className='w-full h-full' href="https://www.youtube.com/channel/UCD90BZIQ_i3qlxrbP-W-ksA">
                            <Image src="/youtube.png" alt="ikonka youtube" fill={true} objectFit='contain'></Image>
                        </a>
                    </div>
                    
                    
                    <div className='relative w-[30%] h-full'>
                        <a className='w-full h-full' href='https://www.facebook.com/ParafiaAndrzeja'>
                            <Image src="/facebook.png" alt="ikonka facebooka" fill={true} objectFit='contain'></Image>
                        </a>
                    </div>
                    
                </div>
                <div className={`flex flex-col w-full h-[30vh] md:h-full md:w-[15%]`}>
                <div className={`w-full h-full relative`}>
                    <Image alt="logo kosciola" src="/kosciol_logo.png" fill={true} objectFit='contain'></Image>
                
                </div>
                <div className=' mt-[1vh] w-full flex flex-col'>
                    <p className='text-center'><Link href="/bibliografia">Bibliografia zdjęć</Link></p>
                    <p className='text-center mt-[1vh]'>© {year} – Wszelkie prawa zastrzeżone</p>
                    <p className='mt-[1vh] text-center'>Developed by - <a href='https://filipolszewski.co.uk'>Filip Olszewski</a></p>
                </div>
            
        </div>
            </div> */}
    </div>
  )
}
export default Footer
