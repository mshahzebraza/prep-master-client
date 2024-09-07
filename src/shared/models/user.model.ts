import { z } from "zod";

export const userBaseSchema = z.object({
    username: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
});

export type IUserBase = z.infer<typeof userBaseSchema>;