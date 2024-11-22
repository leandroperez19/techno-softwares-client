import { useScreen } from "@/hooks/useScreen";
import { useRef, useState } from "react";

export const useLayoutHooks = () => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean | null>(null);
    const sidebarRef = useRef<HTMLDivElement | null>(null);

    const { isMobile } = useScreen(1024);

    const closeSidebar = () => {
        sidebarRef.current?.classList.remove("active");
        sidebarRef.current?.classList.add("inactive");
    };

    const openSidebar = () => {
        sidebarRef.current?.classList.add("active");
        sidebarRef.current?.classList.remove("inactive");
    };

    const sidebarToggle = () => {
        if (!isMobile) return null;

        if (!sidebarOpen) {
            setSidebarOpen(true);
            openSidebar();
            return null;
        }
        closeSidebar();
        setTimeout(() => {
            setSidebarOpen(false);
        }, 300);
    };

    return {
        sidebarOpen,
        setSidebarOpen,
        sidebarRef,
        sidebarToggle,
    };
};
