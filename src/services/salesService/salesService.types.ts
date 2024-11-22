import { createSaleFullSchema } from "./../../schemas/salesSchema";
import { z } from "zod";

export const SalesByCurrencyResponseSchema = z.array(
    z.object({
        value: z.number(),
        currency: z.enum(["USD", "EUR", "GBP"]),
    })
);

export type SalesByCurrency = z.infer<typeof SalesByCurrencyResponseSchema>;

export const SalesByCategoryResponseSchema = z.array(
    z.object({
        category: z.object({
            id: z.number().positive(),
            name: z.string(),
        }),
        percentage: z.coerce.number(),
    })
);

export type SalesByCategory = z.infer<typeof SalesByCategoryResponseSchema>;

export const SalesOverTimeResponseSchema = z.array(
    z.object({
        date: z.coerce.date(),
        close: z.number(),
        currency: z.enum(["USD", "EUR", "GBP"]),
    })
);

export type SalesOverTime = z.infer<typeof SalesOverTimeResponseSchema>;

export interface queryParams {
    period?: string;
    limit?: string;
    page?: string;
}

export const SingleSaleResponseSchema = z.object({
    id: z.number(),
    categoryId: z.number(),
    amount: z.number(),
    userId: z.number(),
    currency: z.string(),
    itemType: z.string(),
    itemName: z.string(),
    description: z.string(),
    date: z.string().datetime({ offset: true }),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
    user: z.object({
        userName: z.string(),
        id: z.number(),
    }),
    category: z.object({
        name: z.string(),
    }),
});

export type Sale = z.infer<typeof SingleSaleResponseSchema>;

export const AllSalesResponseSchema = z.object({
    total: z.number(),
    page: z.number(),
    pages: z.number(),
    canPrev: z.boolean(),
    canNext: z.boolean(),
    sales: z.array(SingleSaleResponseSchema),
});

export type Sales = z.infer<typeof AllSalesResponseSchema>;

export type CreateSalePayload = z.infer<typeof createSaleFullSchema>;

export const CreateSaleResponseSchema = z.object({
    message: z.string(),
    sale: z.object({
        id: z.number(),
        categoryId: z.number(),
        amount: z.number(),
        userId: z.number(),
        currency: z.string(),
        itemType: z.string(),
        itemName: z.string(),
        description: z.string(),
        date: z.string().datetime({ offset: true }),
        createdAt: z.string().datetime({ offset: true }),
        updatedAt: z.string().datetime({ offset: true }),
    }),
});

export type CreateSaleResponse = z.infer<typeof CreateSaleResponseSchema>;
