import { forwardRef } from "react";
import { ButtonProps } from "./button.types";
import { ButtonWrapper } from "./button.styled";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            disabled,
            children,
            type,
            customCssClass,
            bordered = false,
            rounded = true,
            radius = "8px",
            size = "regular",
            color = "primary",
            shadow = false,
            ...props
        },
        ref
    ) => {
        return (
            <ButtonWrapper
                $bordered={bordered}
                $rounded={rounded}
                $radius={radius}
                $color={color}
                $size={size}
                $shadow={shadow}
                className={customCssClass}
            >
                <button disabled={disabled} type={type} {...props} ref={ref}>
                    {children}
                </button>
            </ButtonWrapper>
        );
    }
);

export default Button;
