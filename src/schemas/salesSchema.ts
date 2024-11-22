import { z } from "zod";

export const createSaleSchema = z.object({
    amount: z.coerce
        .number({ required_error: "Amount is required" })
        .positive("Amount must be a positive number"),

    itemName: z
        .string({ required_error: "Item name is required" })
        .min(1, "Item name must not be empty")
        .max(120, "Item name is too long"),
    description: z
        .string({ required_error: "Item description is required" })
        .min(1, "Item description must not be empty")
        .max(255, "Item description is too long"),
    date: z.coerce.date({
        required_error: "Date is required",
    }),
});

export const createSaleFullSchema = createSaleSchema.extend({
    currency: z.enum(["USD", "EUR", "GBP"], {
        required_error: "Currency is required",
    }),
    itemType: z.enum(
        [
            "Electronics",
            "Clothing",
            "Groceries",
            "Books",
            "Furniture",
            "Toys",
            "Accessories",
            "Other",
        ],
        {
            required_error: "Item type is required",
        }
    ),
    categoryId: z
        .number({
            required_error: "Category is required",
        })
        .positive("Category Id must be a positive number"),
});

export type createSaleSchemaFormPayload = z.infer<typeof createSaleSchema>;
