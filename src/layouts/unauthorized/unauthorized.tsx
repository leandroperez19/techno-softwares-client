import { FC } from "react";
import { UnauthorizedWrapper } from "./unauthorized.styled";
import { UnauthorizedLayoutProps } from "./unauthorized.types";
import logo from "@/assets/static/logo.png";
import Image from "@/components/image/image";

const Unauthorized: FC<UnauthorizedLayoutProps> = ({ children }) => {
    return (
        <UnauthorizedWrapper>
            <div className="content">
                <div className="logo-container">
                    <Image alt="logo" src={logo} />
                </div>
                <div className="form">{children}</div>
            </div>
        </UnauthorizedWrapper>
    );
};

export default Unauthorized;
