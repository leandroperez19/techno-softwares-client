import LayoutContext from "@/context/layoutContext";
import { FC, ReactNode } from "react";
import { useLayoutHooks } from "./layoutProvider.hooks";

const LayoutProvider: FC<LayoutProviderProps> = ({ children }) => {
    const { sidebarOpen, setSidebarOpen, sidebarRef, sidebarToggle } =
        useLayoutHooks();

    return (
        <LayoutContext.Provider
            value={{
                sidebarOpen,
                setSidebarOpen,
                sidebarRef,
                sidebarToggle,
            }}
        >
            {children}
        </LayoutContext.Provider>
    );
};

type LayoutProviderProps = {
    children: ReactNode;
};

export default LayoutProvider;
