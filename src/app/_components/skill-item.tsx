"use client"
import { Card, CardContent } from "@/components/ui/card";
import { TSkillType } from "../types/types";
import Image from "next/image";

export const SkillItem = ({
  name,
  image
}:TSkillType) => {
  return (
    <div className="p-1 select-none pointer-events-none">
      <Card>
        <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
          <div className="w-[7vw] h-[7vw] p-2 flex justify-center items-center">
            <Image src={image} alt={name}/>
          </div>
          <div className="text-[1vw] font-bold p-2 w-[8vw] bg-yellow-100 flex items-center justify-center rounded-full border border-yellow-300">
            {name}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}