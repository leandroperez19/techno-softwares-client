import { FC } from "react";
import { SidebarWrapper } from "./sidebar.styled";
import useLayout from "@/hooks/useLayout";
import { sections } from "../../sections";
import { Link } from "react-router-dom";
import Button from "@/components/button/button";
import useSidebar from "./sidebar.hooks";

const Sidebar: FC = () => {
    const { sidebarRef, sidebarToggle } = useLayout();
    const { logout } = useSidebar();

    return (
        <SidebarWrapper ref={sidebarRef}>
            <div className="sidebar" role="navigation">
                <div className="sections grid gap-4 mt-5">
                    {sections.map((section) => (
                        <div className="section" key={section.i18nKey}>
                            <Link to="">{section.name}</Link>
                        </div>
                    ))}
                </div>
                <Button
                    customCssClass="absolute bottom-[16px] w-[80%]"
                    color="transparent"
                    className="w-full"
                    onClick={logout}
                >
                    Log Out
                </Button>
            </div>
            <div
                className="background-touchable"
                role="presentation"
                onClick={sidebarToggle}
            />
        </SidebarWrapper>
    );
};

export default Sidebar;
