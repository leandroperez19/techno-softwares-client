import { useContext } from "react";
import ThemeContext from "@/context/themeContext";

const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within an ThemesProvider");
    }
    return context;
};

export default useTheme;