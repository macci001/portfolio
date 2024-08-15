import * as z from "zod";

const SkillType = z.object({
  name: z.string(),
  image: z.any()
});
export type TSkillType = z.infer<typeof SkillType>;