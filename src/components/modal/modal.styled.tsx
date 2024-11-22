import styled from "styled-components";
import { ModalWrapperProps } from "./modal.types";
import { flexCenter, fullSize } from "@/styles/mixins";
import { tablet } from "@/styles/constants/sizes";

export const ModalWrapper = styled.div<ModalWrapperProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100dvw;
    height: 100dvh;
    z-index: 4000;
    ${({ $mobileNativeNavigation }) =>
        $mobileNativeNavigation ? "display: unset;" : flexCenter()}

    @media (width >= ${tablet}) {
        ${flexCenter()};
    }

    .background-touchable {
        position: absolute;
        top: 0;
        left: 0;
        ${fullSize()}
        background-color: #00000022;
        backdrop-filter: blur(5px);
    }

    .techno-modal {
        background-color: ${({ theme }) => theme.modal.primary.background};
        padding: ${({ $padding }) => $padding};
        border-radius: ${({ $radius, $mobileNativeNavigation }) =>
            $mobileNativeNavigation ? "12px 12px 0 0" : $radius};
        z-index: 1;
        position: absolute;
        width: ${({ $mobileNativeNavigation }) =>
            $mobileNativeNavigation ? "100%" : "fit-content"};
        min-height: ${({ $mobileNativeNavigation }) =>
            $mobileNativeNavigation ? "30%" : "unset"};
        margin-inline: auto;
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
        animation: ${({ $animation, $mobileNativeNavigation }) =>
            `${
                $mobileNativeNavigation ? "mobileAnimation" : $animation
            } .3s ease normal forwards`};

        @media (width >= ${tablet}) {
            animation-name: ${({ $animation }) => $animation};
            width: fit-content;
            min-height: unset;
            border-radius: ${({ $radius }) => $radius};
        }

        @keyframes mobileAnimation {
            0% {
                bottom: -100%;
            }
            100% {
                bottom: 0%;
            }
        }

        @keyframes slide-top-center {
            0% {
                transform: translateY(-200%);
            }
            100% {
                transform: translateY(0%);
            }
        }

        @keyframes slide-bottom-center {
            0% {
                transform: translateY(200%);
            }
            100% {
                transform: translateY(0%);
            }
        }

        @keyframes slide-left-center {
            0% {
                transform: translateX(200%);
            }
            100% {
                transform: translateX(0%);
            }
        }

        @keyframes slide-right-center {
            0% {
                transform: translateX(-200%);
            }
            100% {
                transform: translateX(0%);
            }
        }

        @keyframes scale-center {
            0% {
                transform-origin: center;
                transform: scale(0);
            }
            100% {
                transform: scale(1);
            }
        }

        @keyframes scale-left-top {
            0% {
                transform-origin: left top;
                transform: scale(0);
            }
            100% {
                transform: scale(1);
            }
        }

        @keyframes scale-right-top {
            0% {
                transform-origin: right top;
                transform: scale(0);
            }
            100% {
                transform: scale(1);
            }
        }

        @keyframes scale-left-bottom {
            0% {
                transform-origin: left bottom;
                transform: scale(0);
            }
            100% {
                transform: scale(1);
            }
        }

        @keyframes scale-right-bottom {
            0% {
                transform-origin: right bottom;
                transform: scale(0);
            }
            100% {
                transform: scale(1);
            }
        }
    }

    &.inactive {
        .techno-modal {
            animation-name: ${({ $animation, $mobileNativeNavigation }) =>
                $mobileNativeNavigation
                    ? "mobileAnimation-reverse"
                    : `${$animation}-reverse`};

            @keyframes mobileAnimation-reverse {
                0% {
                    bottom: 0%;
                }
                100% {
                    bottom: -100%;
                }
            }

            @keyframes slide-top-center-reverse {
                0% {
                    transform: translateY(0%);
                }
                100% {
                    transform: translateY(-200%);
                }
            }

            @keyframes slide-bottom-center-reverse {
                0% {
                    transform: translateY(0%);
                }
                100% {
                    transform: translateY(200%);
                }
            }

            @keyframes slide-left-center-reverse {
                0% {
                    transform: translateX(0%);
                }
                100% {
                    transform: translateX(200%);
                }
            }

            @keyframes slide-right-center-reverse {
                0% {
                    transform: translateX(0%);
                }
                100% {
                    transform: translateX(-200%);
                }
            }

            @keyframes scale-center-reverse {
                0% {
                    transform-origin: center;
                    transform: scale(1);
                }
                100% {
                    transform: scale(0);
                }
            }

            @keyframes scale-left-top-reverse {
                0% {
                    transform-origin: left top;
                    transform: scale(1);
                }
                100% {
                    transform: scale(0);
                }
            }

            @keyframes scale-right-top-reverse {
                0% {
                    transform-origin: right top;
                    transform: scale(1);
                }
                100% {
                    transform: scale(0);
                }
            }

            @keyframes scale-left-bottom-reverse {
                0% {
                    transform-origin: left bottom;
                    transform: scale(1);
                }
                100% {
                    transform: scale(0);
                }
            }

            @keyframes scale-right-bottom-reverse {
                0% {
                    transform-origin: right bottom;
                    transform: scale(1);
                }
                100% {
                    transform: scale(0);
                }
            }
        }
    }
`;
