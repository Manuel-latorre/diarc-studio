import Image from 'next/image'
import React from 'react'
import linkedin from '../../images/linkedin.png'

const LinkedinIcon = () => {
  return <Image width={50} height={50} src={linkedin} alt='Linkedin Icon' className='max-lg:w-[40px] max-lg:h-[40px]'/>
}

export default LinkedinIcon