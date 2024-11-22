import { useContext } from "react";
import LayoutContext from "@/context/layoutContext";

const useLayout = () => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error("useLayout must be used within an LayoutProvider");
    }
    return context;
};

export default useLayout;
