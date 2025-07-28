// export const revalidate = 1800; // Revalidate every 30 minutes
export const dynamic = 'force-dynamic'; // Force dynamic rendering

import React from 'react'
import Header from './header'
import Episodes from './episodes'
import Menu from '@/app/components/navigation/menu'
import Youtube from './youtube'

const Page = () => {
  return (
    <div>
        
        <Header/>
        {/* <Episodes /> */}
        <Youtube />
    </div>
  )
}

export default Page
  