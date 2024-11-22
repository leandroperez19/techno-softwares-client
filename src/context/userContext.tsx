import { User } from "@/services/authService/authService.types";
import { createContext, Dispatch, SetStateAction } from "react";

const UserContext = createContext<UserContextProps | null>(null);

export type UserContextProps = {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
    userLoading: boolean;
};

export default UserContext;
