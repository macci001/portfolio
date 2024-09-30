"use client"
import skillElements from "../skillList";
import {Chip} from "@nextui-org/react";

export const Skills = () => {
  return (<div id="skills" className="pt-16 flex flex-col items-center">
    <div className="relative text-xl font-semibold tracking-tight">
      SKILLS
    </div>
    <div className="py-4 flex flex-wrap gap-x-2 gap-y-2 justify-between">
      {
        skillElements.map((skill, index) => {
          return (<>
            <Chip key={index} variant="bordered" className="shadow">{skill.name}</Chip>
          </>)
        })
      }
    </div>
  </div>)
}