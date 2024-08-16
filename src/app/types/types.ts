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
  isLeftAlign: z.boolean(),
  sourceCodeUrl: z.string(),
  projectUrl: z.string().optional()
})

export type TSkillType = z.infer<typeof SkillType>;
export type TProjectType = z.infer<typeof ProjectType>;