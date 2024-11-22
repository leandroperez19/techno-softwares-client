import styled from "styled-components";
import { SelectWrapperProps } from "./select.types";
import { regular, tiny } from "@/styles/constants/sizes";
import { flex } from "@/styles/mixins";

const getSize = (size: SelectWrapperProps["$size"]) => {
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

export const SelectWrapper = styled.div<SelectWrapperProps>`
    position: relative;

    .top-box {
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
        box-shadow: ${({ $shadow }) =>
            $shadow && "0 2px 4px 0 rgba(73, 57, 49, 0.3)"};
        font-size: ${regular};
        ${flex("center")}
        padding-inline: 18px;
    }

    span.label {
        position: absolute;
        font-weight: 500;
        pointer-events: none;
        user-select: none;
        font-size: ${regular};
        color: ${({ theme, $color }) => theme.input[$color].labelColor};
        top: 50%;
        transform: translateY(-50%);
        transition: all 0.3s ease;
        z-index: 5;
    }

    span.label.tiny {
        font-size: ${tiny};
        color: ${({ theme, $color }) => theme.input[$color].labelColorFocus};
        transform: translateY(-145%);
    }
`;
