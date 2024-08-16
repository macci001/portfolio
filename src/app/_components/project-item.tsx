import { TProjectType } from "../types/types";
import { Link } from "lucide-react";

export const ProjectItem = ({
  name,
  summary,
  desc1,
  desc2,
  desc3,
  projectUrl,
  sourceCodeUrl
} : TProjectType) => {
  return (<div className="border border-yellow-200 w-[70vw] grid grid-cols-8 rounded-md p-4">
    <div className="hidden lg:col-span-2 lg:flex flex-col items-center">
      <div className="text-lg font-bold p-4 aspect-square bg-yellow-100 rounded-md flex items-center justify-center">
        {name.toUpperCase()}
      </div>
    </div>
    <div className="col-span-8 lg:col-span-6 flex flex-col items-start">
    <div className="text-2xl font-bold">{name}</div>
      <div className="text-md text-muted-foreground">{summary}</div>
      <div className="px-8">
        <ul className="list-disc">
          <li>{desc1}</li>
          <li>{desc2}</li>
          <li>{desc3}</li>
        </ul>
      </div>
      <div className="flex flex-col sm:flex-row">
        {
          projectUrl ? <div className="mt-4 flex items-center gap-x-2 bg-yellow-50 hover:bg-yellow-200 rounded-full p-2 px-4">
            <Link className="w-4 h-4"/>
            <a href={projectUrl} target="_blank">
              visit project
            </a>
          </div> : <>
          </>
        }
        
        <div className="mt-4 flex items-center gap-x-2 bg-yellow-50 hover:bg-yellow-200 rounded-full p-2 px-4">
          <Link className="w-4 h-4"/>
          <a href={sourceCodeUrl} target="_blank">
            source code
          </a>
        </div>
      </div>
    </div>
  </div>)
};