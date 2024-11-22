import { doGet, doPost } from "../requestHandler";
import {
    LogoutResponse,
    logoutResponseSchema,
    SignInPayload,
    signInResponse,
    signInResponseSchema,
    SignUpPayload,
} from "./authService.types";

export const signInRequest = async (payload: SignInPayload) => {
    return await doPost<signInResponse>(
        "/sign-in",
        payload,
        signInResponseSchema.parse
    );
};

export const signUpRequest = async (payload: SignUpPayload) => {
    return await doPost<signInResponse>(
        "/sign-up",
        payload,
        signInResponseSchema.parse
    );
};

export const logOutRequest = async () => {
    return doPost<LogoutResponse>("/logout", {}, logoutResponseSchema.parse);
};

export const verifyToken = async () => {
    return await doGet<signInResponse>("/get-user", signInResponseSchema.parse);
};
