import { z } from "zod";

export const loginFormDefaultValues = {
    email: '',
    password: ''
}

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export type LoginFormValues = z.infer<typeof loginSchema>;

