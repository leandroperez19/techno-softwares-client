import { desktop, tablet } from "@/styles/constants/sizes";
import { fullSize } from "@/styles/mixins";
import styled from "styled-components";

export const SideModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100dvw;
    height: 100dvh;
    z-index: 4000;
    overflow: hidden;

    .background-touchable {
        position: absolute;
        top: 0;
        left: 0;
        ${fullSize()}
        background-color: #00000022;
        backdrop-filter: blur(5px);
    }

    .modal {
        z-index: 1;
        position: absolute;
        background-color: ${({ theme }) => theme.modal.primary.background};
        top: 0;
        right: 0;
        height: auto;
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
        padding: 24px;
        width: 90%;
        max-width: 786px;
        border-bottom-left-radius: 12px;
        transform: translateX(100%);
        height: 100%;

        animation: slideIn 0.3s ease normal forwards;

        @keyframes slideIn {
            100% {
                transform: translateX(0%);
            }
        }

        @media (width >= ${tablet}) {
            height: 99%;
        }

        @media (width >= ${desktop}) {
            padding: 28px 40px 40px;
            width: 50%;
        }
    }

    &.closing {
        .modal {
            animation: slideOut 0.3s ease normal forwards;
            transform: translateX(0%);

            @keyframes slideOut {
                100% {
                    transform: translateX(100%);
                }
            }
        }

        .background-touchable {
            animation: opacityOff 0.3s ease normal forwards;
            opacity: 1;

            @keyframes opacityOff {
                100% {
                    opacity: 0;
                }
            }
        }
    }
`;
