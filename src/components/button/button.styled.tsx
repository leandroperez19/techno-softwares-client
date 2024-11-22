import styled from "styled-components";
import { ButtonWrapperProps, SharedButtonProps } from "./button.types";

const getSize = (size: SharedButtonProps["size"]) => {
    const sizes = {
        xs: "32px",
        sm: "40px",
        medium: "46px",
        regular: "50px",
        lg: "60px",
        xl: "75px",
    } as const;

    return sizes[size] ?? "50px";
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    button {
        height: ${({ $size }) => getSize($size)};
        background-color: ${({ $color, theme }) =>
            theme.button[$color].background};
        color: ${({ $color, theme }) => theme.button[$color].color};
        border: ${({ $bordered, theme, $color }) =>
            $bordered
                ? `1px solid ${theme.button[$color].borderColor}`
                : "none"};
        border-radius: ${({ $radius }) => $radius};
        box-shadow: ${({ $shadow, theme, $color }) =>
            $shadow
                ? `0 3px 6px ${theme.button[$color].shadowColor}`
                : "unset"};

        &:focus {
            background-color: ${({ $color, theme }) =>
                theme.button[$color].focusBackground};
            color: ${({ $color, theme }) => theme.button[$color].focusColor};
        }

        &:disabled {
            opacity: 0.3;
            pointer-events: none;
            user-select: none;
        }

        @media (hover: hover) {
            &:hover {
                background-color: ${({ $color, theme }) =>
                    theme.button[$color].hoverBackground};
                color: ${({ $color, theme }) =>
                    theme.button[$color].hoverColor};
            }
        }
    }
`;
