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
        <CardContent className="flex flex-col aspect-square items-center justify-center p-6 gap-y-2">
          <div className="p-2 flex justify-center items-center aspect-square">
            <Image src={image} alt={name} width={75} height={75}/>
          </div>
          <div className="text-md font-semibold p-2 bg-yellow-50 flex items-center justify-center rounded-md border border-yellow-100 w-full">
            {name}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}