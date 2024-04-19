"use client";

import { Navbar, NavbarContent, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react"
import Link from "next/link"
import { useReducer, useState } from "react";
import { ActiveLinks } from "../active-links/ActiveLinks";


const navLinks = [
    {path: '/#solutions', text: 'Solutions'},
    {path: '/#portfolio', text: 'Portfolio'},
    {path: '/#contact', text: 'Contact'},
    {path: '/#aboutus', text: 'About us'},
]

export const NavMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
      <Navbar
        className="lg:hidden bg-transparent w-full fixed h-[120px]"
        onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="lg:hidden bg-transparent"

          />
        </NavbarContent>
        <NavbarMenu className={`bg-transparent z-50 mt-10`}>
            {navLinks.map((link) => (
              <NavbarMenuItem>
                    <ActiveLinks
                      onClick={() => setIsMenuOpen(false)}
                      key={link.path}
                      text={link.text}
                      path={link.path}
                    />
              </NavbarMenuItem>
              ))}
        </NavbarMenu>
      </Navbar>
    );
}