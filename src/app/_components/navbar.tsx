"use client"
import {Navbar, NavbarContent, NavbarItem, Link, Button, NavbarBrand, NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Switch} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon } from "./sunIcon";
import { MoonIcon } from "./moonIcon";


export const NavbarComponent = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
  const [mounted, setMounted] = useState(false)
  const { setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <Navbar onMenuOpenChange={setMenuOpen} isMenuOpen={isMenuOpen} classNames={{wrapper: "justify-end", base: "fixed top-0 h-16 w-2xl"}}>
      <NavbarBrand>
        <Switch 
          size="sm" 
          isSelected={isLightMode} 
          onValueChange={() => {isLightMode ? setTheme("dark"): setTheme("light"); setIsLightMode(!isLightMode);}}
          startContent={<SunIcon />}
          endContent={<MoonIcon />}
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex">
          <NavbarItem>
            <Link color="foreground" href="#home" className="text-sm" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#project" className="text-sm" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#achievements" className="text-sm" onClick={() => setMenuOpen(false)}>
              Achievements
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#skills" className="text-sm" onClick={() => setMenuOpen(false)}>
              Skills
            </Link>
          </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="sm:hidden">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarMenu>
          <NavbarMenuItem>
            <Link color="foreground" href="#home" className="text-sm" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color="foreground" href="#project" className="text-sm" onClick={() => setMenuOpen(false)}>
              Projects
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color="foreground" href="#achievements" className="text-sm" onClick={() => setMenuOpen(false)}>
              Achievements
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link color="foreground" href="#skills" className="text-sm" onClick={() => setMenuOpen(false)}>
              Skills
            </Link>
          </NavbarMenuItem>

        </NavbarMenu>
      </NavbarContent>
    </Navbar>
  )
}