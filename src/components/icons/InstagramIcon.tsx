import Image from 'next/image'
import instagram from '../../images/instagram.png'

const InstagramIcon = () => {
  return <Image width={60} height={60} src={instagram} alt='instagram icon' className='max-lg:w-[40px] max-lg:h-[40px]'/>
}

export default InstagramIcon