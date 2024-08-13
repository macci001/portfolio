"use client"

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export const Skills = () => {
  return (<div id="skills" className="flex flex-col mt-[5vh] items-center gap-y-6">
    <div className="text-[2vw] font-semibold relative">
      Skills
      <div className="absolute w-full h-4 bg-yellow-400 opacity-400 top-8 opacity-40"></div>
    </div>
    <div>
      <Carousel className="w-[75vw]" opts={{align: "start"}} plugins={[Autoplay({delay: 2000})]}>
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <>
              <CarouselItem key={index} className="basis-1/6">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">{index }</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  </div>)
}