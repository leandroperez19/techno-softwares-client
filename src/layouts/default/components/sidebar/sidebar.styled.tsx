import { flex, fullSize } from "@/styles/mixins";
import styled from "styled-components";

export const SidebarWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100dvw;
    z-index: 2000;

    .background-touchable {
        z-index: 2000;
        position: absolute;
        top: 0;
        left: 0;
        ${fullSize()}
        background-color: #00000022;
        backdrop-filter: blur(1px);
        opacity: 0;
        animation: opacityUp 0.3s ease normal forwards;

        @keyframes opacityUp {
            100% {
                opacity: 1;
            }
        }
    }

    .sidebar {
        height: 100dvh;
        width: clamp(260px, 50%, 350px);
        background-color: ${({ theme }) => theme.sidebar.backgroundColor};
        position: relative;
        padding: 8px 24px 24px;
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
        z-index: 3000;
        transform: translateX(-100%);
        animation: slideIn 0.3s ease normal forwards;

        @keyframes slideIn {
            100% {
                transform: translateX(0%);
            }
        }

        .section {
            min-height: 45px;
            width: 100%;
            border-radius: 12px;
            transition: background-color 0.3s ease;
            color: ${({ theme }) => theme.sidebar.sectionColor};
            font-weight: 500;
            overflow: hidden;
            ${flex("center")}
            padding-inline: 12px;

            &:hover {
                background-color: ${({ theme }) =>
                    theme.sidebar.sectionBgHover};
            }

            &:focus {
                background-color: ${({ theme }) =>
                    theme.sidebar.sectionBgHover};
            }
        }
    }

    &.inactive {
        .sidebar {
            animation: slideOut 0.3s ease normal forwards;
            transform: translateX(0%);

            @keyframes slideOut {
                100% {
                    transform: translateX(-100%);
                }
            }
        }

        .background-touchable {
            animation: opacityDown 0.3s ease normal forwards;
            opacity: 1;

            @keyframes opacityDown {
                100% {
                    opacity: 0;
                }
            }
        }
    }
`;
