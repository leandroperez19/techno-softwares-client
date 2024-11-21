import { createGlobalStyle } from "styled-components";
import { flexCenter } from "./mixins";

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        transition: color, background 0.2s ease-in-out;
        font-family: "Open Sans", sans-serif;
    }

    body {
        min-height: 100dvh;
        min-width: 100dvw;
        overflow-x: hidden;
        background-color: ${({ theme }) => theme.palette.page.bodyColor};

        @media (hover: hover) {
            &::-webkit-scrollbar {
                background-color: ${({ theme }) =>
                    theme.palette.page.scrollbarBg};
                width: 0.5rem;
            }

            &::-webkit-scrollbar-track {
                background-color: ${({ theme }) =>
                    theme.palette.page.scrollbarBg};
            }

            &::-webkit-scrollbar-thumb {
                background-color: ${({ theme }) =>
                    theme.palette.page.scrollbarThumb};
                border-radius: 0.25rem;
            }
        }
    }

    // extra classes

    .text-primary {
        color: ${({ theme }) => theme.palette.text.primary};
    }

    .text-secondary {
        color: ${({ theme }) => theme.palette.text.secondary};
    }

    .text-tertiary {
        color: ${({ theme }) => theme.palette.text.tertiary};
    }

    .text-quaternary {
        color: ${({ theme }) => theme.palette.text.quaternary};
    }

    .text-fifthly {
        color: ${({ theme }) => theme.palette.text.fifthly};
    }

    .text-senary {
        color: ${({ theme }) => theme.palette.text.senary};
    }

    .text-septenary {
        color: ${({ theme }) => theme.palette.text.septenary};
    }

    .text-accent {
        color: ${({ theme }) => theme.palette.text.accent};
    }

    .flex-center {
        ${flexCenter()}
    }

    .flex-center-col {
        ${flexCenter("column")}
    }

      // global animations

      .global_slideInX {
        transform: translateX(-100%);
        animation: global_slideInX .3s ease normal forwards;

        @keyframes global_slideInX {
            100% {
                transform: translateX(0);
            }
        }
    }

    .global_slideOutX {
        transform: translateX(0);
        animation: global_slideOutX .3s ease normal forwards;

        @keyframes global_slideInX {
            100% {
                transform: translateX(-100%);
            }
        }
    }

    .global_popUp {
        transform: scale(0);
        animation: global_popUp .3s ease normal forwards;

        @keyframes global_popUp {
            100% {
                transform: scale(1);
            }
        }
    }

    .global_opacityOn {
            opacity: 0;
            animation: opacityOn .3s ease normal forwards;

            @keyframes opacityOn {
                100% {
                    opacity: 1;
                }
            }
    }

    .global_opacityOff {
            opacity: 1;
            animation: opacityOff .3s ease normal forwards;

            @keyframes opacityOff {
                100% {
                    opacity: 0;
                }
            }
    }

    .global_opacityDisplayOn {
            opacity: 0;
            width: 0;
            animation: global_opacityDisplayOn .3s ease normal forwards;

            @keyframes global_opacityDisplayOn {
                100% {
                    opacity: 1;
                    width: auto;
                }
            }
    }


    .global_opacityDisplayOff {
            opacity: 1;
            width: auto;
            animation: global_opacityDisplayOff .3s ease normal forwards;
            white-space: nowrap;

            @keyframes global_opacityDisplayOff {
                100% {
                    opacity: 0;
                    width: 0;
                    display: none;
                }
            }   
    }

    .global_flipLeft {
        animation: global_flipLeft .3s ease  normal forwards;
        -webkit-transform: scaleX(1);
        transform: scaleX(1);

        @keyframes global_flipLeft  {
            100% {
                -webkit-transform: scaleX(-1);
                transform: scaleX(-1);
            }
        }
    }

    
    .global_flipRight {
        animation: global_flipRight .3s ease  normal forwards;
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);

        @keyframes global_flipRight  {
            100% {
                -webkit-transform: scaleX(1);
                transform: scaleX(1);
            }
        }
    }

`;

export default GlobalStyles;
