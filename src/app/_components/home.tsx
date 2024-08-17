"use client"
import Image from "next/image"
import img1 from "./images/1595184190294.jpeg";
import Typewriter from "typewriter-effect";
import { Socials } from "./socials";

export const Home = () => {
  return (<div id="home" className="m-4 mt-[8vh] relative h-[94vh]">
    <div className="w-[30vw] h-[30vh] border-yellow-200">
    </div>
    <div className="absolute top-[30vh] left-[15vw] flex flex-col items-start gap-y-2">
      <div className="text-2xl text-muted-foreground pl-0.5">Hi, I am</div>
      <div className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight">
        Maharshi Alpesh
      </div>
      <div className="flex gap-x-2 text-[2vw]">
        <div className="text-2xl">A</div>
        <div className="text-2xl font-semibold text-yellow-400 relative">
          <Typewriter
              onInit={(typewriter) => { 
                typewriter.typeString('Full Stack Engineer')
                  .pauseFor(2000) 
                  .deleteAll() 
                  .typeString('Developer')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('Problem Solver')
                  .pauseFor(2000)
                  .start(); 
              }} 
              options={
                {
                  loop: true
                }
              }
            /> 
          <div className="absolute w-full h-2 bg-white opacity-75"></div>
        </div>
      </div>
      <Socials  />
    </div>
  </div>
  )
}
