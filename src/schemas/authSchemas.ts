import { z } from "zod";

export const userLogInSchema = z.object({
    email: z
        .string({
            required_error: "The email is required",
        })
        .min(1, "The email is required")
        .email("Invalid email format"),
    password: z
        .string({
            required_error: "The password is required",
        })
        .min(8, "The password must contain at least 8 characters"),
});

export const userSignUpSchema = userLogInSchema.extend({
    userName: z
        .string({
            required_error: "Username is required",
        })
        .min(3, "Username must have at least 3 characters")
        .trim(),
});
