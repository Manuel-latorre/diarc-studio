import Image from 'next/image'
import React from 'react'
import chaosvr from './chaosvr.svg'



const ChaosVrIcon = () => {
  return (
    <div>
        <Image width={50} height={50} src={chaosvr} alt='chaos vr icon'/>
        {/* <p className="font-bold">Chaos VR</p> */}
    </div>
  )
}

export default ChaosVrIcon