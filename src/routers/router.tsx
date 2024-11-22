import ProtectedRoute from "@/components/protectedRoute/protectedRoute";
import PublicRoute from "@/components/publicRoute/publicRoute";
import Default from "@/layouts/default/default";
import Categories from "@/pages/categories/categories";
import Home from "@/pages/home/home";
import Login from "@/pages/login/login";
import Logs from "@/pages/logs/logs";
import NotFound from "@/pages/notFound/notFound";
import Register from "@/pages/register/register";
import Sales from "@/pages/sales/sales";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <ProtectedRoute>
                <Home />
            </ProtectedRoute>
        ),
        errorElement: <NotFound />,
    },
    {
        path: "/sales",
        element: (
            <ProtectedRoute>
                <Default>
                    <Sales />
                </Default>
            </ProtectedRoute>
        ),
    },
    {
        path: "/categories",
        element: (
            <ProtectedRoute>
                <Default>
                    <Categories />
                </Default>
            </ProtectedRoute>
        ),
    },
    {
        path: "/logs",
        element: (
            <ProtectedRoute>
                <Default>
                    <Logs />
                </Default>
            </ProtectedRoute>
        ),
    },
    {
        path: "/sign-in",
        element: (
            <PublicRoute>
                <Login />
            </PublicRoute>
        ),
    },
    {
        path: "/sign-up",
        element: (
            <PublicRoute>
                <Register />
            </PublicRoute>
        ),
    },
]);

export const Router = () => <RouterProvider router={router} />;
