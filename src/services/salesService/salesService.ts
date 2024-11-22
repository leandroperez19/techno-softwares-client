import { doGet, doPost } from "../requestHandler";
import {
    AllSalesResponseSchema,
    CreateSalePayload,
    CreateSaleResponse,
    CreateSaleResponseSchema,
    queryParams,
    Sales,
    SalesByCategory,
    SalesByCategoryResponseSchema,
    SalesByCurrency,
    SalesByCurrencyResponseSchema,
    SalesOverTime,
    SalesOverTimeResponseSchema,
} from "./salesService.types";

export const getSalesByCurrencyRequest = async ({
    period = "semester",
}: queryParams) => {
    return await doGet<SalesByCurrency>(
        `/sales-by-currency?period=${period}`,
        SalesByCurrencyResponseSchema.parse
    );
};

export const getSalesByCategoryRequest = async ({
    period = "semester",
}: queryParams) => {
    return await doGet<SalesByCategory>(
        `/sales-by-category?period=${period}`,
        SalesByCategoryResponseSchema.parse
    );
};

export const getSalesOverTimeRequest = async ({
    period = "semester",
}: queryParams) => {
    return await doGet<SalesOverTime>(
        `/sales-overtime?period=${period}`,
        SalesOverTimeResponseSchema.parse
    );
};

export const getSalesRequest = async ({
    page = "1",
    limit = "8",
}: queryParams) => {
    return await doGet<Sales>(
        `/get-sales?page=${page}&limit=${limit}`,
        AllSalesResponseSchema.parse
    );
};

export const createSaleRequest = async (payload: CreateSalePayload) => {
    return await doPost<CreateSaleResponse>(
        "/create-sale",
        payload,
        CreateSaleResponseSchema.parse
    );
};
