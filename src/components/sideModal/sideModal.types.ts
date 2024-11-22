import { Dispatch, ReactNode, SetStateAction } from "react";

export type SideModalProps = {
    closeModal: Dispatch<SetStateAction<boolean>> | (() => void);
    children: ReactNode;
    closeButton?: string;
    closeOnX?: boolean;
};
