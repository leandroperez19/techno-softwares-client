import { desktop } from "@/styles/constants/sizes";
import { fullSize } from "@/styles/mixins";
import styled from "styled-components";

export const SalesByCategoryWrapper = styled.div`
    .swiper {
        ${fullSize()};
        max-height: 90px;

        @media (width >= ${desktop}) {
            max-height: 130px;
        }
    }

    .swiper-slide {
        height: auto;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }
`;
