import Image from 'next/image'
import React from 'react'
import wp from '../../images/whatsapp.png'

const WhatsappIcon = () => {
  return <Image width={40} height={40} src={wp} alt='Whatsapp icon'/>
}

export default WhatsappIcon