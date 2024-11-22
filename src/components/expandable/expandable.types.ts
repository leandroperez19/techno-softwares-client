import { ReactNode } from "react";

export type ExpandableProps = {
    children: ReactNode;
    title: string;
    icon?: string | ReactNode;
    rotateIcon?: boolean;
    active?: boolean;
    className?: string;
    iconClassName?: string;
    topClassName?: string;
};

export type ExpandableWrapperProps = {
    $rotateIcon: boolean;
};
