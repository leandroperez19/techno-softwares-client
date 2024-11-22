import { doGet } from "../requestHandler";
import {
    AllLogsResponse,
    logsResponseSchema,
    queryParams,
} from "./logsService.types";

export const getAllLogsRequest = async ({
    limit = "10",
    page = "1",
}: queryParams) => {
    return await doGet<AllLogsResponse>(
        `/get-logs?limit=${limit}&page=${page}`,
        logsResponseSchema.parse
    );
};
