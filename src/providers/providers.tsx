import { FC, ReactNode } from "react";
import ThemesProvider from "./themeProvider/themeProvider";

const Providers: FC<ProvidersProps> = ({ children }) => {
    return <ThemesProvider>{children}</ThemesProvider>;
};

type ProvidersProps = {
    children: ReactNode;
};

export default Providers;
