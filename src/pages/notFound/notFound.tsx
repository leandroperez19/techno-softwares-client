import { FC } from "react";
import { NotFoundWrapper } from "./notFound.styled";
import logo from "@/assets/static/logo.png";
import Image from "@/components/image/image";
import Button from "@/components/button/button";
import { useNavigate } from "react-router-dom";
import { useScreen } from "@/hooks/useScreen";

const NotFound: FC = () => {
    const navigate = useNavigate();
    const { isMobile } = useScreen(1024);
    const goHome = () => navigate("/");

    return (
        <NotFoundWrapper>
            <div className="logo-container">
                <Image alt="logo" src={logo} />
            </div>

            <div className="container">
                <h2>404</h2>
                <p className="text-lg lg:text-bold lg:text-xl">
                    Oops! It looks like you're lost.
                </p>
                <p className="text-sm lg:text-lg">
                    We couldn't find the page you were looking for. Please click
                    the button below to return home.
                </p>
                <Button
                    className="mt-6 px-6 lg:px-10"
                    radius="40px"
                    onClick={goHome}
                    size={isMobile ? "regular" : "lg"}
                    color={isMobile ? "tertiary" : "primary"}
                >
                    Take me back
                </Button>
            </div>
        </NotFoundWrapper>
    );
};

export default NotFound;
