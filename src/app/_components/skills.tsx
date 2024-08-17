"use client"

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { SkillItem } from "./skill-item";

import skillElements from "../skillList";

export const Skills = () => {
  return (<div id="skills" className="flex flex-col my-[5vh] items-center gap-y-6">
    <div className="relative text-2xl md:text-4xl xl:text-5xl font-bold tracking-tight">
      Skills
      <div className="absolute bg-yellow-400 w-full h-4 -bottom-2 opacity-40"></div>
    </div>
    <div>
      <Carousel className="w-[75vw]" opts={{align: "start"}} plugins={[Autoplay({delay: 1500})]}>
        <CarouselContent>
          {skillElements.map((skill, index) => (
            <>
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 xl:1/5">
                <SkillItem {...skill} key={index}/>
              </CarouselItem>
            </>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  </div>)
}