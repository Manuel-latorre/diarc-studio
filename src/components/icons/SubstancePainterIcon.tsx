import Image from 'next/image'
import React from 'react'
import substancePainter from './substance-painter.svg'

const SubstancePainterIcon = () => {
  return (
    <div className='flex flex-col items-center'>
      <Image width={50} height={50} src={substancePainter} alt='Substance painter icon'/>
      {/* <p className="font-bold mt-1">Substance Painter</p> */}

    </div>
  )
}

export default SubstancePainterIcon