import styled from "styled-components";
import { InputWrapperProps, sharedProps } from "./input.types";
import { flex, fullSize } from "@/styles/mixins";
import { regular, small } from "@/styles/constants/sizes";

const getSize = (size: sharedProps["size"]) => {
    const sizes = {
        xs: "32px",
        sm: "40px",
        regular: "48px",
        medium: "50px",
        large: "60px",
        xl: "67px",
    } as const;

    return sizes[size] ?? "50px";
};

export const InputWrapper = styled.div<InputWrapperProps>`
    width: 100%;

    span.label-elevated {
        font-size: ${({ $labelFont }) => $labelFont};
        color: ${({ $labelColor, theme, $color }) =>
            $labelColor ? $labelColor : theme.input[$color].labelColor};
    }

    .input {
        border: ${({ theme, $bordered, $color }) =>
            $bordered && `1px solid ${theme.input[$color].borderColor}`};
        background-color: ${({ theme, $color }) =>
            theme.input[$color].background};
        color: ${({ theme, $color }) => theme.input[$color].color};
        border-radius: ${({ $radius }) => $radius};
        width: 100%;
        height: ${({ $size }) => getSize($size)};
        position: relative;
        overflow: hidden;
        ${({ $icon }) =>
            flex("center", `${$icon ? "space-between" : "flex-end"}`)}
        box-shadow: ${({ $shadow }) =>
            $shadow && "0 2px 4px 0 rgba(73, 57, 49, 0.3)"};

        &.error {
            border: ${({ theme, $bordered, $error, $success, $color }) =>
                $bordered &&
                $error &&
                !$success &&
                `2px solid ${theme.input[$color].dangerColor}`};

            span.label {
                color: ${({ theme, $color }) =>
                    theme.input[$color].dangerColor};
            }
        }

        &.full,
        &:focus-within {
            span.label {
                font-size: ${({ $labelFocusFont }) => $labelFocusFont};
                color: ${({ $labelFocusFont, theme, $color }) =>
                    $labelFocusFont
                        ? $labelFocusFont
                        : theme.input[$color].labelColorFocus};
                transform: translateY(-145%);
            }
        }

        &.full {
            .eye-icon {
                transform: ${({ $error, $success }) =>
                    !$error && !$success && "scale(1)"};
            }
        }

        &:focus-within {
            border: ${({ theme, $bordered, $color }) =>
                $bordered && `2px solid ${theme.input[$color].borderOnFocus}`};

            .eye-icon {
                transform: scale(1);
            }

            .status-icon {
                display: ${({ $type, $showStatusIcon }) =>
                    $type === "password" && $showStatusIcon && "none"};
            }
        }

        span.label {
            position: absolute;
            font-weight: 500;
            pointer-events: none;
            user-select: none;
            font-size: ${({ $labelFont }) => $labelFont};
            color: ${({ $labelColor, theme, $color }) =>
                $labelColor ? $labelColor : theme.input[$color].labelColor};
            left: ${({ $icon }) => ($icon ? "36px" : "18px")};
            top: 50%;
            transform: translateY(-50%);
            transition: all 0.3s ease;
            z-index: 5;
        }

        span.label:has(+ input:-webkit-autofill),
        span.label:has(+ input:disabled) {
            font-size: ${({ $labelFocusFont }) => $labelFocusFont};
            color: ${({ $labelFocusFont, theme, $color }) =>
                $labelFocusFont
                    ? $labelFocusFont
                    : theme.input[$color].labelColorFocus};
            transform: translateY(-155%);
        }

        &:has(input:disabled) {
            opacity: 0.4;
        }

        input {
            ${fullSize()};
            padding-inline: ${({ $icon }) => ($icon ? "36px" : "18px 45px")};
            font-size: ${regular};
            position: absolute;
            left: 0;
            bottom: 0;
            border: none;
            outline: none;
            background-color: transparent;

            &::placeholder {
                font-size: ${({ $labelFont }) => $labelFont};
                color: ${({ $labelColor, theme, $color }) =>
                    $labelColor ? $labelColor : theme.input[$color].labelColor};
            }
        }

        .eye-icon {
            transition: 0.3s ease;
            transform: scale(0);
            margin-right: 10px;
            cursor: pointer;
            padding: 5px;
            user-select: none;
            border-radius: 5px;

            @media (hover: hover) {
                &:hover {
                    background-color: #00000011;
                }
            }
        }

        .status-icon {
            pointer-events: none;
        }

        &.label-static {
            span.label {
                font-size: ${({ $labelFocusFont }) => $labelFocusFont};
                color: ${({ $labelFocusFont, theme, $color }) =>
                    $labelFocusFont
                        ? $labelFocusFont
                        : theme.input[$color].labelColorFocus};
                transform: translateY(-160%);
            }
        }
    }

    .error {
        min-height: 22px;

        .error-message {
            font-size: ${small};
            color: ${({ theme, $color }) => theme.input[$color].dangerColor};
        }
    }
`;
