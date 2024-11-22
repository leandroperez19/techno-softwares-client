import { FC } from "react";
import Unauthorized from "@/layouts/unauthorized/unauthorized";
import Input from "@/components/input/input";
import { Link } from "react-router-dom";
import Button from "@/components/button/button";
import { useScreen } from "@/hooks/useScreen";
import useRegister from "./register.hooks";
import { RegisterWrapper } from "./register.styled";

const Register: FC = () => {
    const { isMobile } = useScreen(1024);
    const { register, errors, isValid, isSubmitting, handleSubmit, onSubmit } =
        useRegister();

    return (
        <Unauthorized>
            <RegisterWrapper>
                <h2 className="py-[2px] px-4 text-[18px] border-l-[6px] border-[#FF6752] font-bold text-tertiary uppercase">
                    Join
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
                        label={"User Name"}
                        size={isMobile ? "regular" : "large"}
                        labelClassName="uppercase"
                        {...register("userName", { required: true })}
                        errorMessage={errors.userName?.message}
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

                    <Button
                        size={isMobile ? "regular" : "xl"}
                        customCssClass="flex w-fit mx-auto mt-[32px] lg:mt-[46px]"
                        className="px-[30px] lg:px-[43px] text-lg lg:text-[20px] font-semibold uppercase"
                        shadow
                        radius="38px"
                        disabled={!isValid || isSubmitting}
                    >
                        {isSubmitting ? "Loading" : "Sign Up"}
                    </Button>
                    <p className="mt-[24px] lg:mt-[32px] text-sm uppercase text-secondary text-center">
                        Already have an account?{" "}
                        <Link to="/sign-in" className="text-quaternary">
                            Sign In
                        </Link>
                    </p>
                </form>
            </RegisterWrapper>
        </Unauthorized>
    );
};

export default Register;
