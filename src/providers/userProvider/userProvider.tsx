import UserContext from "@/context/userContext";
import { FC, ReactNode } from "react";
import { useUserHooks } from "./userProvider.hooks";

const UserProvider: FC<UserProviderProps> = ({ children }) => {
    const { user, setUser, userLoading } = useUserHooks();

    return (
        <UserContext.Provider value={{ user, setUser, userLoading }}>
            {children}
        </UserContext.Provider>
    );
};

type UserProviderProps = {
    children: ReactNode;
};

export default UserProvider;
