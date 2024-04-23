import Image from 'next/image'
import React from 'react'
import substanceDesigner from './substance-designer1.png'

const SubstanceDesignerIcon = () => {
  return (
    <div className='flex flex-col items-center'>
        <Image width={50} height={50} src={substanceDesigner} alt='Substance designer icon'/>
        {/* <p className="font-bold mt-1">Substance Designer</p> */}
    </div>
  )
}

export default SubstanceDesignerIcon