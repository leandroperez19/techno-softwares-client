import { regular } from "@/styles/constants/sizes";
import styled from "styled-components";

export const TableWrapper = styled.div`
    width: 100%;
    box-shadow: 0 1px 2px 3px #0000003f;
    background-color: ${({ theme }) => theme.table.background};
    border-radius: 16px;
    overflow: scroll;

    &::-webkit-scrollbar {
        display: none;
    }

    &::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.palette.page.scrollbarBg};
    }

    &::-webkit-scrollbar-thumb {
        background-color: #54656f;
        border-radius: 0.25rem;
    }

    table {
        width: 100%;

        thead {
            font-size: ${regular};
            background-color: ${({ theme }) => theme.table.background};
            color: ${({ theme }) => theme.palette.text.secondary};
            height: 76px;

            tr {
                th {
                    text-align: left;
                    padding: 16px;
                    font-weight: 400;
                }
            }
        }

        tbody {
            border-radius: 16px;
            font-size: ${regular};
            background-color: ${({ theme }) => theme.table.bodyBackground};

            tr {
                position: relative;
            }
        }
    }
`;
