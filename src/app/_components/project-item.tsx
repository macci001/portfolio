import Image from "next/image";
import { TProjectType } from "../types/types";
import { Link } from "lucide-react";

export const ProjectItem = ({
  name,
  summary,
  desc1,
  desc2,
  desc3,
  url,
  isLeftAlign
} : TProjectType) => {
  return (<div className="border border-yellow-400 w-[70vw] grid grid-cols-8 rounded-md p-4">
    {
      isLeftAlign ? <>
        <div className="col-span-8 md:col-span-6 flex flex-col items-start">
          <div className="text-2xl font-bold">{name}</div>
            <div className="text-md text-muted-foreground">{summary}</div>
            <div className="px-8">
              <ul className="list-disc">
                <li>{desc1}</li>
                <li>{desc2}</li>
                <li>{desc3}</li>
              </ul>
            </div>
            <div className="mt-4 flex items-center gap-x-2 bg-yellow-50 hover:bg-yellow-200 rounded-full p-2 px-4">
              <Link className="w-4 h-4"/>
              <a href={url} target="_blank">
                visit project
              </a>
            </div>
          </div>
          <div className="hidden md:col-span-2 md:flex flex-col items-center ">
            <div className="text-lg font-bold p-4 aspect-square bg-yellow-100 rounded-md flex items-center justify-center">
              ANONYMITY
          </div>
        </div>
      </> : <>
          <div className="hidden md:col-span-2 md:flex flex-col items-center">
            <div className="text-lg font-bold p-4 aspect-square bg-yellow-100 rounded-md flex items-center justify-center">
              ANONYMITY
            </div>
          </div>
          <div className="col-span-8 md:col-span-6 flex flex-col items-start">
          <div className="text-2xl font-bold">{name}</div>
            <div className="text-md text-muted-foreground">{summary}</div>
            <div className="px-8">
              <ul className="list-disc">
                <li>{desc1}</li>
                <li>{desc2}</li>
                <li>{desc3}</li>
              </ul>
            </div>
            <div className="mt-4 flex items-center gap-x-2 bg-yellow-50 hover:bg-yellow-200 rounded-full p-2 px-4">
              <Link className="w-4 h-4"/>
              <a href={url} target="_blank">
                visit project
              </a>
            </div>
          </div>
      </>
    }
  </div>)
};