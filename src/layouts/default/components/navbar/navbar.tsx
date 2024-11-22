import { FC } from "react";
import { NavbarWrapper } from "./navbar.styled";
import logo from "@/assets/static/logo.png";
import Image from "@/components/image/image";
import Button from "@/components/button/button";
import { IoMenu, MdOutlineLogout } from "@/assets/icons";
import { useScreen } from "@/hooks/useScreen";
import { sections } from "../../sections";
import { Link, useNavigate } from "react-router-dom";
import useLayout from "@/hooks/useLayout";
import useNavbar from "./navbar.hooks";
import { useUser } from "@/hooks/useUser";

const DesktopLinks: FC = () => {
    const { user } = useUser();
    const { logout } = useNavbar();

    return (
        <div className="desktop-links flex items-center text-white text-2xl font-light gap-[35px]">
            {sections.map((section) => (
                <Link to={section.route} key={section.i18nKey}>
                    {section.name}
                </Link>
            ))}
            {user && (
                <Button
                    color="transparent"
                    customCssClass="flex"
                    className="px-4"
                    onClick={logout}
                >
                    <MdOutlineLogout className="text-white" />
                </Button>
            )}
        </div>
    );
};

const Navbar: FC = () => {
    const { isMobile } = useScreen(1024);
    const { sidebarToggle } = useLayout();
    const { nav } = useNavbar();
    const navigate = useNavigate();

    return (
        <NavbarWrapper ref={nav}>
            <div className="content">
                <div className="left">
                    <div
                        className="logo-container"
                        onClick={() => navigate("/")}
                    >
                        <Image alt="logo" src={logo} />
                    </div>
                </div>
                <div className="right">
                    {isMobile ? (
                        <Button
                            className="px-3"
                            size="sm"
                            customCssClass="flex"
                            color="transparent"
                            onClick={sidebarToggle}
                        >
                            <IoMenu className="text-3xl text-white" />
                        </Button>
                    ) : (
                        <DesktopLinks />
                    )}
                </div>
            </div>
        </NavbarWrapper>
    );
};

export default Navbar;
