"use client"

import { ActiveLinks } from '../active-links/ActiveLinks'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { useEffect, useState } from 'react'

const navLinks1 = [
    {path: '/#solutions', text: 'Solutions'},
    {path: '/portfolio', text: 'Portfolio'},
]

const navLinks2 = [
    {path: '/contact', text: 'Contact'},
    {path: '/about-us', text: 'About us'},
]

export const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${styles.navbar}, w-full h-[100px] flex items-center justify-center gap-7 fixed z-10 ${scrolled ? styles.scrolled : ''}`}>
      {navLinks1.map((navlink) => (
        <ActiveLinks text={navlink.text} path={navlink.path} />
      ))}

      <div className="p-2 mx-2">
        <Link href={"/"}>
          <p className="text-5xl font-bold text-white">DIARC</p>
          <p className="uppercase text-center tracking-[17px] font-normal text-white">
            studio
          </p>
        </Link>
      </div>

      {navLinks2.map((navlink) => (
        <ActiveLinks text={navlink.text} path={navlink.path} />
      ))}
    </nav>
  );
}

