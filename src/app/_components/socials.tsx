import { GithubIcon, LinkedinIcon, Mail, Twitter, TwitterIcon, XIcon } from "lucide-react"
import Link from "next/link"

export const Socials = () => {
  return (<div className="h-14 flex items-center justify-center gap-x-2">
    <Link href={"https://github.com/macci001"} target="_blank" className="rounded-full hover:bg-yellow-100 hover:border hover:border-yellow-400">
      <GithubIcon className="h-7 w-7 text-yellow-700 p-1"/>
    </Link>
    <Link href={"mailto:maharshialpesh@gamil.com"} className="rounded-full hover:bg-yellow-100 hover:border hover:border-yellow-400">
      <Mail className="h-7 w-7 text-yellow-700 p-1"/>
    </Link>
    <Link href={"https://www.linkedin.com/in/chavda-maharshi-1864701b2/"} target="_blank" className="rounded-full hover:bg-yellow-100 hover:border hover:border-yellow-400">
      <LinkedinIcon className="h-7 w-7 text-yellow-700 p-1"/>
    </Link>
    <Link href={"https://twitter.com/MaharshivishnuC"} target="_blank" className="rounded-full hover:bg-yellow-100 hover:border hover:border-yellow-400">
      <TwitterIcon className="h-7 w-7 text-yellow-700 p-1 pt-1.25"/>
    </Link>
  </div>)
}