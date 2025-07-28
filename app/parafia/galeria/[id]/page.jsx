import React from 'react'
import Slides from './slides'
import Footer from '@/app/components/footer'

const Page = ({params}) => {
  return (
    <div>
        <Slides id={params.id}/>
        <Footer/>
    </div>
  )
}

export default Page