import { desktop } from "@/styles/constants/sizes";
import { flex, flexCenter, square } from "@/styles/mixins";
import styled from "styled-components";

export const NotFoundWrapper = styled.div`
    position: relative;
    background-color: #ff6752;
    width: 100dvw;
    height: 100dvh;
    background-image: url("/static/card-bg.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-blend-mode: color-burn;

    .logo-container {
        background-color: white;
        ${square("56px")};
        border-radius: 50%;
        ${flexCenter()};
        padding: 8px;
        position: absolute;
        top: 15px;
        left: 15px;

        @media (width >= ${desktop}) {
            ${square("78px")}
            padding: 16px;
            top: 24px;
            left: 24px;
        }
    }

    .container {
        height: 100%;
        padding: 24px;
        ${flex("flex-start", "center", "column")}
        color: ${({ theme }) => theme.palette.text.accent};
        max-width: 600px;

        @media (width >= ${desktop}) {
            background-color: white;
            margin-left: 14%;
            padding: 32px;
            color: ${({ theme }) => theme.palette.text.primary};
        }

        h2 {
            font-size: 82px;
            font-weight: bold;
            line-height: normal;

            &::after {
                content: "";
                width: 40%;
                display: block;
                height: 3px;
                border-radius: 14px;
                background-color: ${({ theme }) => theme.palette.text.accent};
            }
        }

        p {
            margin-top: 18px;
        }
    }
`;
