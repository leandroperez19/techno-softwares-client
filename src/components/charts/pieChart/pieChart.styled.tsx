import styled from "styled-components";
import { PieChartWrapperProps } from "./pieChart.types";

export const PieChartWrapper = styled.div<PieChartWrapperProps>`
    svg {
        overflow: visible;

        g.arc {
            transition: all 0.3s ease;
            cursor: ${({ $isClickable }) =>
                $isClickable ? "pointer" : "default"};

            @media (hover: hover) {
                &:hover {
                    transform: ${({ $isClickable, $isDonut }) =>
                        $isClickable
                            ? $isDonut
                                ? "translate3d(-4px, -5px, -12px)"
                                : "scale(1.05)"
                            : "unset"};
                }
            }
        }
    }
`;
