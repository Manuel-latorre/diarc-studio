import Image from 'next/image'
import React from 'react'
import yt from '../../images/youtube.png'

const YoutubeIcon = () => {
  return <Image width={40} height={40} src={yt} alt='Youtube Icon'/>
}

export default YoutubeIcon