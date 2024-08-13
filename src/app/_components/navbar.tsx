import Link from "next/link"

export const Navbar = () => {
  return (<div className="p-4 flex justify-end items-center gap-x-8 pr-[15vw] fixed top-0 right-0">
    <Link href={"#home"} className="p-4 rounded-md relative group">
      <div className="font-semibold">Home</div>
      <div className="hidden group-hover:block absolute w-12 h-2 top-9 right-4 bg-yellow-400 opacity-75"/>
    </Link>
    <Link href={"#skills"} className="p-4 rounded-md relative group">    
      <div className="font-semibold">Skills</div>
      <div className="hidden group-hover:block absolute w-11 h-2 top-9 right-4 bg-yellow-400 opacity-75"/>
    </Link>
    <Link href={"#project"} className="p-4 rounded-md relative group">
      <div className="font-semibold">Projects</div>
      <div className="hidden group-hover:block absolute w-14 h-2 top-9 right-4 bg-yellow-400 opacity-75"/>
    </Link>
    <Link href={"#Contact Me"} className="p-4 rounded-md relative group">
      <div className="font-semibold">Contact</div>
      <div className="hidden group-hover:block absolute w-16 h-2 top-9 right-4 bg-yellow-400 opacity-75"/>
    </Link>
  </div>)
}