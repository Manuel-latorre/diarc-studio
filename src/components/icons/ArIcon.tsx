import Image from 'next/image'
import React from 'react'
import ar from './ar.png'


const ArIcon = () => {
  return <Image  width={60} height={60} src={ar} alt='ar icon' className="invert"/>
}

export default ArIcon