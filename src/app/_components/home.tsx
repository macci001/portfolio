"use client"

import { Socials } from "./socials"

export const Home = () => {
  return (
    <div id="home" className="flex justify-between pt-16 gap-x-2">
      <div>
        <div className="font-semibold text-3xl">Maharshi Alpesh</div>
        <div>Software Engineer who loves to solve problems.</div>
        <div className="text-foreground-600 text-sm mt-2">Developer with over three years of experience in Frontend and Backend Development, alongside Database Management. I’ve contributed to impactful projects at leading companies like <span className="font-bold">Oracle</span>, <span className="font-bold">Citicorp</span>, and <span className="font-bold">Samsung</span>.</div>
        <Socials className="justify-start"/>
      </div>
    </div>
  )
}
