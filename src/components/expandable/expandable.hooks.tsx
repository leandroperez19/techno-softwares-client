import { KeyboardEvent, useEffect, useRef } from "react";

const useExpandable = (active: boolean) => {
    const expandable = useRef<HTMLDivElement | null>(null);

    const expandableToggle = () => {
        if (!expandable.current) return null;
        expandable.current.classList.toggle("active");
        return null;
    };

    const expandableKeyboard = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.code === "Space" || e.code === "Enter") expandableToggle();
    };

    useEffect(() => {
        if (active) expandable.current?.classList.add("active");
    }, [active]);

    return {
        expandable,
        expandableToggle,
        expandableKeyboard,
    };
};

export default useExpandable;
