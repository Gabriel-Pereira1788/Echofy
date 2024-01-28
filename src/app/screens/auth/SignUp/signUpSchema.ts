import {z} from 'zod';

const birthDateRegex = /\b\d{1,2}\/\d{1,2}\/\d{4}\b/g;

export const signUpSchema = z.object({
  email: z.string().email('Email not valid.'),
  password: z.string().min(5, 'Password too short.'),
  birthDate: z.string().min(5, 'Incorrect birth date.').regex(birthDateRegex),
});

export type SignUpSchema = z.infer<typeof signUpSchema>;
