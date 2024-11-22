import { FourSizes } from "@/types/size";
import { HTMLAttributes, ReactNode } from "react";

export interface SharedButtonProps {
    size: "xs" | "sm" | "medium" | "regular" | "lg" | "xl";
    bordered: boolean;
    rounded: boolean;
    radius: FourSizes;
    color: "primary" | "transparent" | "secondary" | "tertiary";
    shadow: boolean;
}

export type ButtonWrapperProps = {
    $size: SharedButtonProps["size"];
    $bordered: SharedButtonProps["bordered"];
    $rounded: SharedButtonProps["rounded"];
    $color: SharedButtonProps["color"];
    $radius: SharedButtonProps["radius"];
    $shadow: SharedButtonProps["shadow"];
};

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
    size?: SharedButtonProps["size"];
    bordered?: SharedButtonProps["bordered"];
    rounded?: SharedButtonProps["rounded"];
    color?: SharedButtonProps["color"];
    radius?: SharedButtonProps["radius"];
    customCssClass?: string;
    shadow?: SharedButtonProps["shadow"];
    children: string | ReactNode;
}
