"use client"
import Image from "next/image"
import img1 from "./images/1595184190294.jpeg";
import Typewriter from "typewriter-effect";

export const Home = () => {
  return (<div id="home" className="m-4 mt-[8vh] relative h-[94vh]">
    <div className="w-[50vw] h-[50vh] border-yellow-200">
      
    </div>
    <div className="absolute top-[30vh] left-[40vw]">
      <div className="text-[5vw] font-bold">
        Maharshi Alpesh
      </div>
      <div className="flex gap-x-4 text-[2vw]">
        I am
        <div className="font-semibold text-yellow-400 relative">
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
    </div>
  </div>
  )
}
