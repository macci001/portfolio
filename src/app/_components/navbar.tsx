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
          <Link href="#skills">
            Skills
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#project">
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#contact-me">
            Contact Me
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
  // return (<div className="p-4 flex justify-end items-center gap-x-2 text-[1vw]">
  //   <Link href={"#home"} className="p-2 rounded-md relative group">
  //     <div className="relative text-lg md:text-2xl xl:text-3xl font-bold tracking-tight">
  //       Home
  //     <div className="absolute group-hover:bg-yellow-400 w-full h-4 -bottom-2 opacity-40"></div>
  //     </div>
  //   </Link>
  //   <Link href={"#skills"} className="p-2 rounded-md relative group">    
  //     <div className="relative text-xl md:text-2xl xl:text-3xl font-bold tracking-tight">
  //       Skills
  //     <div className="absolute group-hover:bg-yellow-400 w-full h-4 -bottom-2 opacity-40"></div>
  //     </div>
  //   </Link>
  //   <Link href={"#project"} className="p-2 rounded-md relative group">
  //     <div className="relative text-xl md:text-2xl xl:text-3xl font-bold tracking-tight">
  //       Projects
  //     <div className="absolute group-hover:bg-yellow-400 w-full h-4 -bottom-2 opacity-40"></div>
  //     </div>
  //   </Link>
  //   <Link href={"#contact-me"} className="p-2 rounded-md relative group">
  //     <div className="relative text-xl md:text-2xl xl:text-3xl font-bold tracking-tight">
  //       Contact
  //     <div className="absolute group-hover:bg-yellow-400 w-full h-4 -bottom-2 opacity-40"></div>
  //     </div>
  //   </Link>
  // </div>
  // )
}