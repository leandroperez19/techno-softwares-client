import { verifyToken } from "@/services/authService/authService";
import { User } from "@/services/authService/authService.types";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

export const useUserHooks = () => {
    const [user, setUser] = useState<User | null>(null);
    const [userLoading, setUserLoading] = useState(true);

    const { data, error } = useQuery({
        queryFn: verifyToken,
        refetchOnWindowFocus: false,
        queryKey: ["verify-token"],
    });

    const verifySession = () => {
        if (error) return null;
        if (!data) return null;

        if (data.code === "error") {
            setUserLoading(false);
            return;
        }

        const { user } = data.data;

        setUser(user);
        setUserLoading(false);
    };

    useEffect(() => {
        if (user) return;
        verifySession();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    return {
        user,
        setUser,
        userLoading,
    };
};
