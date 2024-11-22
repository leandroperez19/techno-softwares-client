import { userLogInSchema, userSignUpSchema } from "@/schemas/authSchemas";
import { z } from "zod";

export type SignInPayload = z.infer<typeof userLogInSchema>;

export const signInResponseSchema = z.object({
    message: z.string(),
    user: z.object({
        userName: z.string(),
        email: z.string().email(),
        createdAt: z.coerce.date(),
        updatedAt: z.coerce.date(),
        id: z.number().positive(),
    }),
});

export type signInResponse = z.infer<typeof signInResponseSchema>;

export type SignUpPayload = z.infer<typeof userSignUpSchema>;

export type User = signInResponse["user"];

export const logoutResponseSchema = z.object({
    message: z.string(),
    code: z.string(),
});

export type LogoutResponse = z.infer<typeof logoutResponseSchema>;
