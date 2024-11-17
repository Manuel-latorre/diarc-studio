import React from 'react'
import BdiIcon from './icons/BdiIcon'
import ModalForm from './ModalForm'

interface Header {
    title: string;
    cta: JSX.Element;
    buttons: JSX.Element
}

const Header = ({title, cta, buttons }:Header) => {
  return (
    <div className="fixed w-full bg-[#2e2e2e] py-4 px-4 xl:pl-12 flex items-center justify-between max-sm:flex-col max-sm:justify-center max-sm:gap-6">
        <div className="flex items-center gap-4">
          <BdiIcon />
          <p className="text-3xl font-thin max-sm:text-xl">{title}</p>
        </div>
        <div className="flex items-center gap-6 max-sm:mt-6">
          <ModalForm text={cta}/>
          {buttons}
        </div>
        
      </div>
  )
}

export default Header
