import clsx from "clsx"
import { GithubIcon, LinkedinIcon, Mail, Twitter, TwitterIcon, XIcon } from "lucide-react"
import Link from "next/link"

export const Socials = ({className}: {className?: string}) => {
  return (<div className={clsx("h-14 flex items-center gap-x-2", className)}>
    <Link href={"https://github.com/macci001"} target="_blank" className="rounded-full hover:bg-foreground-100 border hover:border hover:border-foreground-400">
      <GithubIcon className="h-7 w-7 text-foreground-700 p-2"/>
    </Link>
    <Link href={"mailto:maharshialpesh@gamil.com"} className="rounded-full hover:bg-foreground-100 border hover:border hover:border-foreground-400">
      <Mail className="h-7 w-7 text-foreground-700 p-2"/>
    </Link>
    <Link href={"https://www.linkedin.com/in/chavda-maharshi-1864701b2/"} target="_blank" className="rounded-full hover:bg-foreground-100 border hover:border hover:border-foreground-400">
      <LinkedinIcon className="h-7 w-7 text-foreground-700 p-2"/>
    </Link>
    <Link href={"https://twitter.com/MaharshivishnuC"} target="_blank" className="rounded-full hover:bg-foreground-100 border hover:border hover:border-foreground-400">
      <TwitterIcon className="h-7 w-7 text-foreground-700 p-2"/>
    </Link>
  </div>)
}