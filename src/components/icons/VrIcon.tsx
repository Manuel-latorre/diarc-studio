import Image from 'next/image'
import React from 'react'
import vr from './vr.png'


const VrIcon = () => {
  return <Image width={60} height={60} src={vr} alt='vr icon' className="invert"/>
}

export default VrIcon