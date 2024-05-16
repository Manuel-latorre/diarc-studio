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
        className="lg:hidden bg-transparent w-full fixed h-[100px] top-0"
        isMenuOpen={isMenuOpen}
        onMenuOpenChange={setIsMenuOpen}
      >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden bg-transparent"

        />
        </NavbarContent>
        <NavbarMenu className={`bg-gradient-to-t bg-transparent z-50 mt-9`}>
              <div className="flex flex-col gap-4 mt-10">
                <NavbarMenuItem>
                  <Link onClick={() => setIsMenuOpen(false)} href={"/#solutions"} className="uppercase font-bold">
                    Solutions
                  </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                  <Link onClick={() => setIsMenuOpen(false)} href={"/#portfolio"} className="uppercase font-bold">
                    Portfolio
                  </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                  <Link onClick={() => setIsMenuOpen(false)} href={"/#aboutus"} className="uppercase font-bold">
                    About us
                  </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                  <Link onClick={() => setIsMenuOpen(false)} href={"/#contact"} className="uppercase font-bold">
                    Contact
                  </Link>
                </NavbarMenuItem>
              </div>
        </NavbarMenu>
      </Navbar>
    );
}