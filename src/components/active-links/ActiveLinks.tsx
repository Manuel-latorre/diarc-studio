'use client';

import Link from "next/link";
import style from './ActiveLinks.module.css';
import { usePathname } from "next/navigation";


interface Props {
    path:string;
    text:string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const ActiveLinks = ({path, text, onClick}:Props) => {
  
  const pathName = usePathname()  


  return (
    <Link className={`${style.link} ${ (pathName === path) && style['active-link']}`} href={path} onClick={onClick}>
      {text}                    
    </Link>
  )
}

