import { doGet, doPost } from "../requestHandler";
import {
    AllCategoriesResponse,
    crateCategoryPayload,
    CreateCategoryResponse,
    createCategoryResponseSchema,
    queryParams,
    responseSchema,
} from "./categoriesService.types";

export const getAllCategoriesRequest = async ({
    page = "1",
    limit = "10",
}: queryParams) => {
    return await doGet<AllCategoriesResponse>(
        `/get-categories?limit=${limit}&page=${page}`,
        responseSchema.parse
    );
};

export const createCategoryRequest = async (payload: crateCategoryPayload) => {
    return await doPost<CreateCategoryResponse>(
        "/create-category",
        payload,
        createCategoryResponseSchema.parse
    );
};
