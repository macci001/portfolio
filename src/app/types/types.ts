import * as z from "zod";

const SkillType = z.object({
  name: z.string(),
  image: z.any()
});

const ProjectType = z.object({
  name: z.string(),
  summary: z.string(),
  desc1: z.string(),
  desc2: z.string(),
  desc3: z.string(),
  image: z.any(),
  url: z.string(),
  isLeftAlign: z.boolean()
})

export type TSkillType = z.infer<typeof SkillType>;
export type TProjectType = z.infer<typeof ProjectType>;