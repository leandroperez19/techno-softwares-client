import { desktop, extraLargeScreen, tablet } from "@/styles/constants/sizes";
import { flex, flexCenter, square } from "@/styles/mixins";
import styled from "styled-components";

export const UnauthorizedWrapper = styled.div`
    height: 100dvh;
    ${flexCenter()}
    background-image: url("/static/red-background-horizontal.PNG");
    background-size: 100% auto;
    background-repeat: no-repeat;

    @media (width >= ${tablet}) {
        background-position: 0 -30px;
    }

    @media (width >= ${desktop}) {
        background-image: url("/static/red-background.PNG");
        background-position: 0 0;
        background-size: 50% 100%;
        ${flex("center", "space-between")}

        .content {
            ${flex("flex-start", "space-between")}
            margin-inline: auto;
            width: 90%;
            max-width: 1128px;
        }
    }

    @media (width >= ${extraLargeScreen}) {
        .content {
            max-width: 1328px;
        }
    }

    .form {
        width: 100%;
        max-width: 400px;
    }

    .logo-container {
        background-color: white;
        ${square("56px")};
        border-radius: 50%;
        ${flexCenter()};
        position: absolute;
        top: 8px;
        left: 8px;
        padding: 12px;

        @media (width >= ${tablet}) {
            top: 16px;
            left: 16px;
            ${square("84px")};
            padding: 18px;
        }

        @media (width >= ${desktop}) {
            position: relative;
            ${square("250px")};
            top: 0;
            left: 0;
            padding: 56px;
        }

        @media (width >= ${extraLargeScreen}) {
            ${square("365px")}
        }
    }
`;
