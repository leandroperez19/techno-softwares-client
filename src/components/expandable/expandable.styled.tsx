import styled from "styled-components";
import { ExpandableWrapperProps } from "./expandable.types";

export const ExpandableWrapper = styled.div<ExpandableWrapperProps>`
    width: 100%;

    .icon {
        transition: transform 0.3s ease;
    }

    .to-display {
        display: grid;
        grid-template-rows: 0fr;
        transition: grid-template-rows 0.3s ease;

        & > div {
            overflow: hidden;
        }
    }

    &.active {
        .icon {
            transform: ${({ $rotateIcon }) =>
                `rotate(${$rotateIcon ? "180deg" : "0deg"})`};
        }

        .to-display {
            grid-template-rows: 1fr;
        }
    }
`;
