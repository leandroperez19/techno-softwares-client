import { FourSizes, Size } from "@/types/size";
import { HTMLAttributes, ReactNode } from "react";

export interface sharedProps {
    size: "xs" | "sm" | "regular" | "medium" | "large" | "xl";
    color: "primary";
    bordered: boolean;
    error: boolean;
    disabled: boolean;
    labelFocusFont: Size;
    labelFont: Size;
    labelColor: `#${string}` | `rgba(${string})` | null;
    labelColorFocus: `#${string}` | `rgba(${string})` | null;
    type: "text" | "password" | "number";
    showStatusIcon: boolean;
    success: boolean;
    radius: FourSizes;
    shadow: boolean;
}

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder?: string;
    type?: sharedProps["type"];
    customCssClass?: string;
    errorMessage?: string;
    showErrorMessage?: boolean;
    error?: sharedProps["error"];
    disabled?: sharedProps["disabled"];
    size?: sharedProps["size"];
    bordered?: sharedProps["bordered"];
    icon?: ReactNode;
    labelFocusFont?: sharedProps["labelFocusFont"];
    labelFont?: sharedProps["labelFont"];
    labelColor?: sharedProps["labelColor"];
    labelColorFocus?: sharedProps["labelColorFocus"];
    name?: string;
    id?: string;
    showStatusIcon?: sharedProps["showStatusIcon"];
    success?: sharedProps["success"];
    elevated?: boolean;
    color?: sharedProps["color"];
    radius?: sharedProps["radius"];
    shadow?: sharedProps["shadow"];
    labelClassName?: string;
    value?: string | number | readonly string[];
    staticLabel?: boolean;
    step?: string;
}

export type InputWrapperProps = {
    $size: sharedProps["size"];
    $error: sharedProps["error"];
    $success: sharedProps["success"];
    $disabled: sharedProps["disabled"];
    $bordered: sharedProps["bordered"];
    $labelFocusFont: sharedProps["labelFocusFont"];
    $labelFont: sharedProps["labelFont"];
    $labelColor: sharedProps["labelColor"];
    $labelColorFocus: sharedProps["labelColorFocus"];
    $icon: boolean;
    $type: sharedProps["type"];
    $showStatusIcon: sharedProps["showStatusIcon"];
    $color: sharedProps["color"];
    $radius: sharedProps["radius"];
    $shadow: sharedProps["shadow"];
};
