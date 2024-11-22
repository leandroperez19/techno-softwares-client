import { FC, ReactNode } from "react";
import ThemesProvider from "./themeProvider/themeProvider";
import UserProvider from "./userProvider/userProvider";
import LayoutProvider from "./layoutProvider/layoutProvider";

const Providers: FC<ProvidersProps> = ({ children }) => {
    return (
        <UserProvider>
            <ThemesProvider>
                <LayoutProvider>{children}</LayoutProvider>
            </ThemesProvider>
        </UserProvider>
    );
};

type ProvidersProps = {
    children: ReactNode;
};

export default Providers;
