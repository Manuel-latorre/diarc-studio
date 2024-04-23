import Image from 'next/image'
import React from 'react'
import console from './console.png'

const ConsoleIcon = () => {
  return <Image  width={60} height={60} src={console} alt='console icon' className="invert"/>
}

export default ConsoleIcon