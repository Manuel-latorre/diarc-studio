"use client"
import { ActiveLinks } from '../active-links/ActiveLinks';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { useEffect, useState } from 'react';
import { NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Navbar } from '@nextui-org/react';
import { NavMobile } from './NavMobile';

const navLinks1 = [
    {path: '/#solutions', text: 'Solutions'},
    {path: '/#portfolio', text: 'Portfolio'},
];

const navLinks2 = [
    {path: '/#contact', text: 'Contact'},
    {path: '/#aboutus', text: 'About us'},
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrolledBg, setScrolledBg] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLinks, setActiveLinks] = useState<{ [key: string]: boolean }>({});

  

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
        zIndex:3,
    }





    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        const newActiveLinks: { [key: string]: boolean } = {};
    Object.keys(activeLinks).forEach((key) => {
        newActiveLinks[key] = false;
    });
    newActiveLinks[path] = true;
    setActiveLinks(newActiveLinks);
        const anchorName = path.replace('/#', '');
        const anchorElement = document.getElementById(anchorName);
        if (anchorElement) {
            const offsetTop = anchorElement.offsetTop - 100; // Height of your navbar
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    };

    const getLinkClassName = (path: string) => {
      return activeLinks[path] ? styles.btn : styles.link;
  };

    return (
      <nav
        className="w-full h-[120px] flex items-center justify-center fixed z-30 max-lg:hidden"
        style={navbarStyle}
      >
        <div style={bgStyle} className="flex items-center justify-center bg-style w-screen h-full">
          <div className="flex gap-7 flex-1 justify-end z-30 max-lg:hidden">
            {navLinks1.map((navlink) => (
              <ActiveLinks
                key={navlink.path}
                text={navlink.text}
                path={navlink.path}
                className={getLinkClassName(navlink.path)}
                onClick={(e) => handleClick(e, navlink.path)}
              />
            ))}
          </div>

          <div style={middleDivStyle}></div>

          <div className="flex gap-7 flex-1 justify-start z-30 max-lg:hidden">
            {navLinks2.map((navlink) => (
              <ActiveLinks
                key={navlink.path}
                text={navlink.text}
                path={navlink.path}
                className={getLinkClassName(navlink.path)}
                onClick={(e) => handleClick(e, navlink.path)}
              />
            ))}
          </div>
        </div>
      </nav>
    );
};
