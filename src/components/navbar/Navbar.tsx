"use client"

import { ActiveLinks } from '../active-links/ActiveLinks';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { useEffect, useState } from 'react';

const navLinks1 = [
    {path: '/#solutions', text: 'Solutions'},
    {path: '/#portfolio', text: 'Portfolio'},
];

const navLinks2 = [
    {path: '/#contact', text: 'Contact'},
    {path: '/about-us', text: 'About us'},
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrolledBg, setScrolledBg] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          // Ajustar la distancia de scroll a 60px para cambiar el estado
          const offset = window.scrollY;
          if (offset > 120) {  // Cambiado de 50 a 60
              setScrolled(true);
          } else {
              setScrolled(false);
          }
      };

      const handleScrollBg = () => {
        // Ajustar la distancia de scroll a 60px para cambiar el estado
        const offset = window.scrollY;
        if (offset > 700) {  // Cambiado de 50 a 60
            setScrolledBg(true);
        } else {
            setScrolledBg(false);
        }
    };

      // Agregando el event listener cuando el componente se monta
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('scroll', handleScrollBg);

      // Limpieza del event listener cuando el componente se desmonte
      return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('scroll', handleScrollBg);
      };
  }, []);

  const navbarStyle = {
    // backgroundColor: scrolledBg ? 'rgba(162, 162, 162, 0.116)' : 'transparent',
    // backdropFilter: scrolledBg ? 'blur(10px)' : 'none',
    // zIndex: 40, // Ajuste del z-index para el navbar
};

  const middleDivStyle = {
      width: scrolled ? '350px' : '50px',
      transition: 'width 0.3s ease-in-out',
      zIndex: 2,
    };

    const bgStyle= {
        backgroundColor: scrolledBg ? 'rgba(162, 162, 162, 0.116)' : 'transparent',
        backdropFilter: scrolledBg ? 'blur(10px)' : 'none',
        width: "100%",
        height:"100%",
        zIndex:3
    }

    return (
      <nav className={`${styles.navbar} w-full h-[120px] flex items-center justify-center fixed z-30`} style={navbarStyle}>
        <div style={bgStyle} className='flex items-center justify-center'>
            <div className="flex gap-7 flex-1 justify-end z-30">
                {navLinks1.map((navlink) => (
                    <ActiveLinks key={navlink.path} text={navlink.text} path={navlink.path} />
                ))}
            </div>
            
            <div style={middleDivStyle}></div>

            <div className="flex gap-7 flex-1 justify-start z-30">
                {navLinks2.map((navlink) => (
                    <ActiveLinks key={navlink.path} text={navlink.text} path={navlink.path} />
                ))}
            </div>
        </div>
        
  </nav>
    );
};
