import Image from 'next/image'
import React from 'react'
import mobile from './mobile.png'



const MobileIcon = () => {
  return <Image  width={70} height={70} src={mobile} alt='mobile icon' className="invert"/>
}

export default MobileIcon