"use client"

import { ActiveLinks } from '../active-links/ActiveLinks';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { useEffect, useState } from 'react';

const navLinks1 = [
    {path: '/#solutions', text: 'Solutions'},
    {path: '/portfolio', text: 'Portfolio'},
];

const navLinks2 = [
    {path: '/#contact', text: 'Contact'},
    {path: '/about-us', text: 'About us'},
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          // Ajustar la distancia de scroll a 60px para cambiar el estado
          const offset = window.scrollY;
          if (offset > 90) {  // Cambiado de 50 a 60
              setScrolled(true);
          } else {
              setScrolled(false);
          }
      };

      // Agregando el event listener cuando el componente se monta
      window.addEventListener('scroll', handleScroll);

      // Limpieza del event listener cuando el componente se desmonte
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

    return (
      <nav className={`${styles.navbar} w-full h-[100px] flex items-center justify-center fixed z-10`}>
        <div className="flex gap-7 flex-1 justify-end">
            {navLinks1.map((navlink) => (
                <ActiveLinks key={navlink.path} text={navlink.text} path={navlink.path} />
            ))}
        </div>
        
        <div style={{ width: scrolled ? '350px' : '50px', transition: 'width 0.3s ease-in-out', zIndex:9999 }}></div>

        <div className="flex gap-7 flex-1 justify-start">
            {navLinks2.map((navlink) => (
                <ActiveLinks key={navlink.path} text={navlink.text} path={navlink.path} />
            ))}
        </div>
  </nav>
    );
};
