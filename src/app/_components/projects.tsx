import projectList from "../productList";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Chip} from "@nextui-org/react";


export const Projects = () => {
  return (<div id="project" className="pt-16 flex flex-col items-center">
    <div className="relative text-xl font-semibold tracking-tight">
      PROJECTS
    </div>
    <div className="py-4 flex flex-col gap-y-4 w-full">
      {
        projectList.map((project, idx) => (
          <Card className="w-full" key={idx}>
            <CardHeader className="flex gap-3">
              <div className="flex flex-col">
                <p className="text-lg text-medium">{project.name}</p>
                <p className="text-small text-default-500">{project.org}</p>
              </div>
            </CardHeader>
            <Divider/>
            <CardBody className="flex flex-col items-start">
              <p>{project.summary}</p>
              <div className="py-2 flex flex-wrap gap-x-1 gap-y-1">
                {
                  project.technologies.map((ele, idx) => {
                    return <Chip variant="faded" size="sm" key={idx}>{ele}</Chip>
                  })
                }
              </div>
            </CardBody>
            <Divider/>
            <CardFooter>
              {project.projectUrl && <Link
                isExternal
                showAnchorIcon
                href={project.projectUrl}
                className="mr-2"
              >
                Visit Project
              </Link>}
              <Link
                isExternal
                showAnchorIcon
                href={project.sourceCodeUrl}
              >
                Visit source code on GitHub.
              </Link>
            </CardFooter>
          </Card>
        ))
      }
    </div>
  </div>);
}
