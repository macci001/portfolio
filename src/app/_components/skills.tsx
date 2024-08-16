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
    <div className="text-[2vw] font-semibold relative">
      Skills
      <div className="absolute w-full h-4 bg-yellow-400 opacity-400 top-8 opacity-40"></div>
    </div>
    <div>
      <Carousel className="w-[75vw]" opts={{align: "start"}} plugins={[Autoplay({delay: 1500})]}>
        <CarouselContent>
          {skillElements.map((skill, index) => (
            <>
              <CarouselItem key={index} className="basis-1/4">
                <SkillItem {...skill} key={index}/>
              </CarouselItem>
            </>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  </div>)
}