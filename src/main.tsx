import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import Providers from "./providers/providers";
import { ToastContainer } from "react-toastify";
import { Router } from "./routers/router";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <Providers>
                <Router />
                <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar
                    theme="colored"
                />
            </Providers>
        </QueryClientProvider>
    </StrictMode>
);
