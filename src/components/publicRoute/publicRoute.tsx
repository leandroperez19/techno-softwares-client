import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "@/hooks/useUser";

type PublicRouteProps = {
    children: ReactNode;
};

const PublicRoute: FC<PublicRouteProps> = ({ children }) => {
    const { user, userLoading } = useUser();

    if (userLoading) return <span>Loading...</span>;

    if (user) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default PublicRoute;
