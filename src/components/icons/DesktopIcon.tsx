import Image from 'next/image'
import desktop from './desktop.png'

const DesktopIcon = () => {
  return <Image width={60} height={60} src={desktop} alt='desktop icon' className="invert"/>
}

export default DesktopIcon