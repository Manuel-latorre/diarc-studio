'use client';

import Link from "next/link";
import style from './ActiveLinks.module.css';
import { usePathname } from "next/navigation";
import { ClassNameValue } from "tailwind-merge";



interface Props {
    path:string;
    text:string;
    className: string
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const ActiveLinks = ({path, text, onClick, className}:Props) => {
  // const [activeLink, setActiveLink] = useState(false);

  const pathName = usePathname()  


  return (
    <Link href={path} className={className} onClick={onClick}>
      {text}                    
    </Link>
  )
}

