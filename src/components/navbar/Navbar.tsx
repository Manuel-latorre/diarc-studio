"use client"
import { ActiveLinks } from '../active-links/ActiveLinks';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { useEffect, useRef, useState } from 'react';
import { useSectionRefs } from '@/app/SectionsRefsContext';

const navLinks1 = [
  {path: '/#solutions', text: 'Solutions'},
  {path: '/#portfolio', text: 'Portfolio'},
];

const navLinks2 = [
  {path: '/#aboutus', text: 'About us'},
  {path: '/#contact', text: 'Contact'},
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrolledBg, setScrolledBg] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLinks, setActiveLinks] = useState<{ [key: string]: boolean }>({});

  const sectionRefs = useSectionRefs();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      const newActiveLinks: { [key: string]: boolean } = {};

      for (const key in sectionRefs.current) {
        const section = sectionRefs.current[key];
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetBottom = offsetTop + section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            newActiveLinks[`/#${key}`] = true;
          } else {
            newActiveLinks[`/#${key}`] = false;
          }
        }
      }

      setActiveLinks(newActiveLinks);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionRefs]);


  useEffect(() => {
      const handleScroll = () => {
          const offset = window.scrollY;
          if (offset > 120) {  // Cambiado de 50 a 60
              setScrolled(true);
          } else {
              setScrolled(false);
          }
      };

      const handleScrollLinks = () => {
        const isScrolled = window.scrollY > 0;
        if (!isScrolled) {
            setActiveLinks({});
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
      window.addEventListener('scroll', handleScrollLinks);
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('scroll', handleScrollBg);

      // Limpieza del event listener cuando el componente se desmonte
      return () => {
          window.removeEventListener('scroll', handleScroll);
          window.removeEventListener('scroll', handleScrollBg);
          window.removeEventListener('scroll', handleScrollLinks);
      };
  }, []);

  const navbarStyle = {
    // backgroundColor: scrolledBg ? 'rgba(162, 162, 162, 0.116)' : 'transparent',
    // backdropFilter: scrolledBg ? 'blur(10px)' : 'none',
    // zIndex: 40, // Ajuste del z-index para el navbar
};

  const middleDivStyle = {
      width: scrolled ? '200px' : '50px',
      transition: 'width 0.3s ease-in-out',
      zIndex: 2,
    };

    const bgStyle= {
        //backgroundColor: scrolledBg ? 'rgba(162, 162, 162, 0.116)' : 'transparent',
        backdropFilter: scrolledBg ? 'blur(10px)' : 'none',
        backgroundColor: scrolledBg ? "rgba(0, 0, 0, .9)" : 'transparent',
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
        className="w-full h-[100px] flex items-center justify-center fixed z-30 max-lg:hidden"
        style={navbarStyle}
      >
        <div style={bgStyle} className="flex items-center justify-center bg-style w-screen h-full">
          <div className="flex flex-1 justify-end z-30 max-lg:hidden">
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

          <div className="flex flex-1 justify-start z-30 max-lg:hidden">
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
