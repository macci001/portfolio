import projectList from "../productList";
import { ProjectItem } from "./project-item";

export const Projects = () => {
  return (<div id="project" className="flex flex-col my-[5vh] mt-[10vh] items-center gap-y-6">
    <div className="relative text-2xl md:text-4xl xl:text-5xl font-bold tracking-tight">
      Projects
      <div className="absolute bg-yellow-400 w-full h-4 -bottom-2 opacity-40"></div>
    </div>
    <div className="flex flex-col gap-y-4">
      {
        projectList.map((project, idx) => (<ProjectItem {...project} isLeftAlign={idx%2 === 1}/>))
      }
    </div>
  </div>)
}
