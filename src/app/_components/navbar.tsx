"use client"
import {Navbar, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";


export const NavbarComponent = () => {
  return (
    <Navbar classNames={{wrapper: "justify-end", base: "fixed top-0 h-16 w-2xl"}}>
      <NavbarContent justify="end">
        <NavbarItem>
          <Link color="foreground" href="#home">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#project">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#achievements">
            Achievements
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#skills">
            Skills
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}