import styled from "styled-components";
import { BoxWrapperProps } from "./box.types";

export const BoxWrapper = styled.div<BoxWrapperProps>`
    background-color: ${({ theme }) => theme.box.background};
    box-shadow: ${({ $shadow }) =>
        $shadow ? " 0 3px 4px 0 rgba(0, 0, 0, 0.25)" : "unset"};
    border-radius: ${({ $radius }) => $radius};
`;
