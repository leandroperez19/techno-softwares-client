import { desktop, extraLargeScreen, tablet } from "@/styles/constants/sizes";
import { fullSize } from "@/styles/mixins";
import styled from "styled-components";

export const DateFilterWrapper = styled.div`
    .arrow {
        transition: transform 0.3s ease;
    }

    &.modal-open {
        .arrow {
            transform: rotate(180deg);
        }
    }
`;

export const DateFilterModalWrapper = styled.div`
    &.inactive {
        .modal {
            transform: scale(1);
            animation: popOff 0.3s ease normal forwards;
            transform-origin: top right;

            @keyframes popOff {
                100% {
                    transform: scale(0);
                }
            }
        }
    }

    .modal {
        background-color: ${({ theme }) => theme.modal.primary.background};
        border-radius: 12px;
        min-width: 200px;
        transform-origin: top right;

        .section {
            padding: 12px;
            transition: background-color 0.3s ease;

            @media (hover: hover) {
                &:hover {
                    background-color: ${({ theme }) =>
                        theme.modal.primary.itemHover};
                }
            }

            &:not(:last-of-type) {
                border-bottom: 1px solid #0002;
            }
        }
    }

    &.no-background {
        position: absolute;
        top: calc(100% + 10px);
        right: 0;
        z-index: 5;

        .modal {
            box-shadow: 0px 0px 6px #00000022;
        }
    }

    &.with-background {
        position: absolute;
        z-index: 4000;
        top: 0;
        left: 0;
        width: 100dvw;
        height: 100dvh;

        .background-touchable {
            position: absolute;
            top: 0;
            left: 0;
            ${fullSize()}
            background-color: #00000011;
            backdrop-filter: blur(5px);
        }

        .modal {
            z-index: 1;
            position: absolute;
            top: 95px;
            right: 5%;

            @media (width >= 460px) {
                right: calc(50% - 425px / 2);
            }

            @media (width >= ${tablet}) {
                right: calc(50% - 768px / 2);
            }

            @media (width >= ${desktop}) {
                top: 125px;
            }

            @media (width >= ${extraLargeScreen}) {
                right: 2%;
            }
        }

        &.inactive {
            .background-touchable {
                opacity: 1;
                animation: opacityOff 0.3s ease normal forwards;
            }
        }
    }
`;
