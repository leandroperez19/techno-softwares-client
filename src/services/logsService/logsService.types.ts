import { z } from "zod";

export const logSchema = z.object({
    _id: z.string(),
    description: z.string(),
    module: z.enum(["Sales", "Auth", "Categories"]),
    userId: z.number(),
    userName: z.string(),
    createdAt: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
    }),
    updatedAt: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date format",
    }),
    __v: z.number(),
});

export const logsResponseSchema = z.object({
    total: z.number(),
    page: z.number(),
    pages: z.number(),
    canPrev: z.boolean(),
    canNext: z.boolean(),
    logs: z.array(logSchema),
});

export type AllLogsResponse = z.infer<typeof logsResponseSchema>;

export interface queryParams {
    limit?: string;
    page?: string;
    module?: string;
}
