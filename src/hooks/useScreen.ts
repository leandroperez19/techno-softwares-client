import { useState, useEffect } from "react";

type screens = "phone" | "tablet" | "desktop";

const getScreen = (width: number): screens => {
    if (width < 768) return "phone";
    if (width < 1024) return "tablet";
    return "desktop";
};

export const useScreen = (width = 768) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < width);
    const [screen, setScreen] = useState<screens>(getScreen(window.innerWidth));

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < width);
            setScreen(getScreen(window.innerWidth));
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        isMobile,
        screen,
    };
};
