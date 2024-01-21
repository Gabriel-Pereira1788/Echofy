import {z} from 'zod';

export const signUpSchema = z.object({
  email: z.string().email('Email not valid.'),
  password: z.string().min(5, 'Password shortly.'),
  birthDate: z.string().min(5, 'Incorrectly.'),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
