import { useEffect, useState } from "react";
import { SelectOption, SelectProps } from "./select.types";
import { v4 as uuid } from "uuid";

const useSelect = <T extends string | number>({
    options,
    value,
    onChange,
    defaultValue,
    searchable,
    disabled,
}: Pick<
    SelectProps<T>,
    | "options"
    | "value"
    | "onChange"
    | "defaultValue"
    | "searchable"
    | "disabled"
>) => {
    const [selected, setSelected] = useState<T | undefined>(defaultValue);
    const [search, setSearch] = useState("");
    const [optionsBoxDisplayed, setOptionsBoxDisplayed] = useState(false);
    const uniqueId = uuid().replaceAll("-", "");

    useEffect(() => {
        if (value !== undefined) {
            setSelected(value);
        }
    }, [value]);

    const handleSelect = (option: SelectOption<T>) => {
        if (disabled) return;
        setSelected(option.value);
        onChange?.(option.value);
        setOptionsBoxDisplayed(false);
    };

    const filteredOptions = searchable
        ? options.filter((opt) =>
              opt.label.toLowerCase().includes(search.toLowerCase())
          )
        : options;

    const openOptionsBox = () => {
        if (disabled) return;
        setOptionsBoxDisplayed(!optionsBoxDisplayed);
    };

    return {
        selected,
        search,
        setSearch,
        handleSelect,
        filteredOptions,
        optionsBoxDisplayed,
        uniqueId,
        setOptionsBoxDisplayed,
        openOptionsBox,
    };
};

export default useSelect;
