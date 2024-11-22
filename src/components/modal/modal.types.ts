import { FourSizes } from "@/types/size";
import { Dispatch, ReactNode, SetStateAction } from "react";

type SharedProps = {
    animation:
        | "slide-top-center"
        | "slide-bottom-center"
        | "slide-left-center"
        | "slide-right-center"
        | "scale-center"
        | "scale-left-top"
        | "scale-right-top"
        | "scale-left-bottom"
        | "scale-right-bottom";
    mobileNativeStyle: boolean;
    padding: FourSizes;
    radius: FourSizes;
};

export type ModalProps = {
    children: ReactNode;
    mobileNativeStyle?: SharedProps["mobileNativeStyle"];
    animation?: SharedProps["animation"];
    className?: string;
    containerClassName?: string;
    padding?: SharedProps["padding"];
    radius?: SharedProps["radius"];
    closeButton?: string;
    closeModal: Dispatch<SetStateAction<boolean>> | (() => void);
};

export type ModalWrapperProps = {
    $animation: SharedProps["animation"];
    $mobileNativeNavigation: SharedProps["mobileNativeStyle"];
    $padding: SharedProps["padding"];
    $radius: SharedProps["radius"];
};
