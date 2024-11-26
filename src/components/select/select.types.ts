import { FourSizes } from "@/types/size";
import { Dispatch, SetStateAction } from "react";

export interface SelectSharedProps {
    size: "xs" | "sm" | "regular" | "medium" | "large" | "xl";
    color: "primary";
    bordered: boolean;
    error: boolean;
    shadow: boolean;
    radius: FourSizes;
}

export interface SelectOption<T extends string | number> {
    label: string;
    value: T;
}

export interface SelectProps<T extends string | number> {
    options: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    loadMore?: () => void;
    isLoading?: boolean;
    hasMore?: boolean;
    placeholder?: string;
    searchable?: boolean;
    defaultValue?: T;
    size?: SelectSharedProps["size"];
    label?: string;
    color?: SelectSharedProps["color"];
    shadow?: SelectSharedProps["shadow"];
    bordered?: SelectSharedProps["bordered"];
    radius?: SelectSharedProps["radius"];
    disabled?: boolean;
}

export type SelectWrapperProps = {
    $size: SelectSharedProps["size"];
    $bordered: SelectSharedProps["bordered"];
    $color: SelectSharedProps["color"];
    $shadow: SelectSharedProps["shadow"];
    $radius: SelectSharedProps["radius"];
};

export type OptionsBoxProps = {
    filteredOptions: SelectOption<string | number>[];
    selected?: string | number;
    handleSelect: (option: SelectOption<string | number>) => void;
    loadMore?: () => void;
    isLoading?: boolean;
    hasMore?: boolean;
    setOptionsBoxDisplayed: Dispatch<SetStateAction<boolean>>;
    selectId: string;
};
