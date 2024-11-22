import { RefObject } from "react";

export type DateFilterProps = {
    backgroundTouchable?: boolean;
    onChange?: (x: string) => void;
};

export type DateFilterModalProps = {
    backgroundTouchable: boolean;
    modalToggle: () => void;
    modalRef: RefObject<HTMLDivElement>;
    selectDate: (x: string) => void;
};
