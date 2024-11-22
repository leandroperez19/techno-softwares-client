import { FourSizes } from "@/types/size";
import { ReactNode } from "react";

type SharedProps = {
    radius: FourSizes;
    shadow: boolean;
};

export type BoxProps = {
    children: ReactNode;
    className?: string;
    radius?: SharedProps["radius"];
    shadow?: SharedProps["shadow"];
};

export type BoxWrapperProps = {
    $radius: SharedProps["radius"];
    $shadow: SharedProps["shadow"];
};
