import { FC } from "react";
import Navbar from "./components/navbar/navbar";
import { DefaultWrapper } from "./default.styled";
import { DefaultProps } from "./default.types";
import Sidebar from "./components/sidebar/sidebar";
import useLayout from "@/hooks/useLayout";

const Default: FC<DefaultProps> = ({ children }) => {
    const { sidebarOpen } = useLayout();

    return (
        <DefaultWrapper>
            <Navbar />
            {sidebarOpen && <Sidebar />}
            <main>{children}</main>
        </DefaultWrapper>
    );
};

export default Default;
