import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2 '>
        <Link className='text-[6.5vw] leading-[6.5vw] border-2 border-white rounded-full px-10 py-5 uppercase pt-1 pb-0 '>Projects</Link>
        <Link className='text-[6.5vw] leading-[6.5vw] border-2 border-white rounded-full px-10 py-5 uppercase pt-1 pb-0 '>agence</Link>
    </div>
  )
}

export default HomeBottomText
