import {z} from 'zod';

export const signInSchema = z.object({
  email: z.string().email('Email not valid.'),
  password: z.string().min(5, 'Password shortly.'),
});

export type SignInSchema = z.infer<typeof signInSchema>;
