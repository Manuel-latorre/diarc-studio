import Image from "next/image";
import web from './web.png'


export default function WebIcon({ className }: { className?: string }){
    return <Image width={60} height={60} src={web} alt="web icon" className={className}/>
}