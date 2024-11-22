import { FC, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@/hooks/useUser";
import Login from "@/pages/login/login";

type ProtectedRouteProps = {
    children: ReactNode;
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
    const { user, userLoading } = useUser();
    const location = useLocation();

    if (userLoading) return <span>Loading...</span>;

    if (location.pathname === "/" && !user) return <Login />;
    else if (!userLoading && !user) {
        return <Navigate to="/sign-in" replace />;
    }

    return children;
};

export default ProtectedRoute;
