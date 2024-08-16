import { Z_STREAM_END } from "zlib";
import {z} from "zod";

export const MessageSchema = z.object({
  name: z.string().min(2).max(10),
  email: z.string().email(),
  message: z.string().min(2).max(100)
})