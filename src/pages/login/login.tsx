import { FC } from "react";
import { LoginWrapper } from "./login.styled";
import Unauthorized from "@/layouts/unauthorized/unauthorized";
import Input from "@/components/input/input";
import { Link } from "react-router-dom";
import Button from "@/components/button/button";
import { useScreen } from "@/hooks/useScreen";
import useLogin from "./login.hooks";

const Login: FC = () => {
    const { isMobile } = useScreen(1024);
    const { register, errors, isValid, isSubmitting, handleSubmit, onSubmit } =
        useLogin();

    return (
        <Unauthorized>
            <LoginWrapper>
                <h2 className="py-[2px] px-4 text-[18px] border-l-[6px] border-[#FF6752] font-bold text-tertiary uppercase">
                    Welcome
                </h2>
                <form
                    className="mt-[32px] lg:mt-[46px]"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input
                        label={"Email"}
                        size={isMobile ? "regular" : "large"}
                        labelClassName="uppercase"
                        {...register("email", { required: true })}
                        errorMessage={errors.email?.message}
                        showStatusIcon
                        success={isValid}
                        disabled={isSubmitting}
                    />
                    <Input
                        label={"Password"}
                        size={isMobile ? "regular" : "large"}
                        className="mt-[12px]"
                        type="password"
                        labelClassName="uppercase"
                        {...register("password", { required: true })}
                        errorMessage={errors.password?.message}
                        showStatusIcon
                        success={isValid}
                        disabled={isSubmitting}
                    />
                    <div className="w-full flex justify-end">
                        <Link
                            to="#"
                            className="text-sm text-secondary mt-[16px]"
                        >
                            Forgot Password?
                        </Link>
                    </div>
                    <Button
                        size={isMobile ? "regular" : "xl"}
                        customCssClass="flex w-fit mx-auto mt-[32px] lg:mt-[46px]"
                        className="px-[30px] lg:px-[43px] text-lg lg:text-[20px] font-semibold uppercase"
                        shadow
                        radius="38px"
                        disabled={!isValid || isSubmitting}
                    >
                        {isSubmitting ? "Loading" : "Sign in"}
                    </Button>
                    <p className="mt-[24px] lg:mt-[32px] text-sm uppercase text-secondary text-center">
                        Don't have an account?{" "}
                        <Link to="/sign-up" className="text-quaternary">
                            Register
                        </Link>
                    </p>
                </form>
            </LoginWrapper>
        </Unauthorized>
    );
};

export default Login;
