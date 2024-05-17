import Image from 'next/image'
import React from 'react'
import yt from '../../images/youtube.png'

const YoutubeIcon = () => {
  return <Image width={60} height={60} src={yt} alt='Youtube Icon' className='max-lg:w-[40px] max-lg:h-[33px]'/>
}

export default YoutubeIcon