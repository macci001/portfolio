import {Card, CardBody, Divider} from "@nextui-org/react";
import { achievementList } from "../achievementList";

export const Achievements = () => {
    return (<div id="achievements" className="pt-16 flex flex-col items-center">
        <div className="relative text-xl font-semibold tracking-tight">
      ACHIEVEMENTS
    </div>
    <div className="py-4 flex flex-col gap-y-4 w-full">
      <Card className="w-full" >
        <CardBody className="flex flex-col items-start">
            {
                achievementList.map((achievement, idx) => {
                    return (
                        <div key={idx} className="w-full">
                            <p className="text-lg text-medium">{achievement.name}</p>
                            <p className="text-small text-default-500">{achievement.description}</p>
                            {idx < achievementList.length - 1 &&  <Divider className="my-2" />}
                        </div>
                    )
                }) 
            }
        </CardBody>
      </Card>
    </div>
    </div>)
}