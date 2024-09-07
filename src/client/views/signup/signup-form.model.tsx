import { z } from "zod";

export const signupFormDefaultValues = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'teacher'
}

export const signupSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
    role: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
}).transform((data) => ({
    name: data.name,
    email: data.email,
    password: data.password,
    role: data.role,
}));

export type SignupFormValues = z.infer<typeof signupSchema>;