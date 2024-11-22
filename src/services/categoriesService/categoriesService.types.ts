import { createCategorySchema } from "@/schemas/categoriesSchema";
import { z } from "zod";

const categorySchema = z.object({
    id: z.number(),
    name: z.string(),
    description: z.string().nullable(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
});

export const responseSchema = z.object({
    total: z.number(),
    page: z.number(),
    pages: z.number(),
    canPrev: z.boolean(),
    canNext: z.boolean(),
    categories: z.array(categorySchema),
});

export type AllCategoriesResponse = z.infer<typeof responseSchema>;

export type crateCategoryPayload = z.infer<typeof createCategorySchema>;

export const createCategoryResponseSchema = z.object({
    code: z.string(),
    category: categorySchema,
});

export type CreateCategoryResponse = z.infer<
    typeof createCategoryResponseSchema
>;

export interface queryParams {
    limit?: string;
    page?: string;
}
