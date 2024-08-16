import projectList from "../productList";
import { ProjectItem } from "./project-item";

export const Projects = () => {
  return (<div id="project" className="flex flex-col my-[5vh] mt-[10vh] items-center gap-y-6">
    <div className="text-[2vw] font-semibold relative">
      Projects
      <div className="absolute w-full h-4 bg-yellow-400 opacity-400 top-8 opacity-40"></div>
    </div>
    <div className="flex flex-col gap-y-4">
      {
        projectList.map((project, idx) => (<ProjectItem {...project} isLeftAlign={idx%2 === 1}/>))
      }
    </div>
  </div>)
}
