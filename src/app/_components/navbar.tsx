"use client"
import Link from "next/link"

export const Navbar = () => {
  return (<div className="p-4 flex justify-end items-center gap-x-8 pr-[15vw] text-[1vw]">
    <Link href={"#home"} className="p-4 rounded-md relative group">
      <div className="font-semibold">Home</div>
      <div className="hidden group-hover:block absolute w-12 h-4 top-7 right-4 bg-yellow-400 opacity-20"/>
    </Link>
    <Link href={"#skills"} className="p-4 rounded-md relative group">    
      <div className="font-semibold">Skills</div>
      <div className="hidden group-hover:block absolute w-11 h-4 top-7 right-4 bg-yellow-400 opacity-20"/>
    </Link>
    <Link href={"#project"} className="p-4 rounded-md relative group">
      <div className="font-semibold">Projects</div>
      <div className="hidden group-hover:block absolute w-14 h-4 top-7 right-4 bg-yellow-400 opacity-20"/>
    </Link>
    <Link href={"#contact-me"} className="p-4 rounded-md relative group">
      <div className="font-semibold">Contact</div>
      <div className="hidden group-hover:block absolute w-16 h-4 top-7 right-4 bg-yellow-400 opacity-20"/>
    </Link>
  </div>)
}