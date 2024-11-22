import { useEffect, useState } from "react";
import { SelectOption, SelectProps } from "./select.types";

const useSelect = <T extends string | number>({
    options,
    value,
    onChange,
    defaultValue,
    searchable,
}: Pick<
    SelectProps<T>,
    "options" | "value" | "onChange" | "defaultValue" | "searchable"
>) => {
    const [selected, setSelected] = useState<T | undefined>(defaultValue);
    const [search, setSearch] = useState("");
    const [optionsBoxDisplayed, setOptionsBoxDisplayed] = useState(false);

    useEffect(() => {
        if (value !== undefined) {
            setSelected(value);
        }
    }, [value]);

    const handleSelect = (option: SelectOption<T>) => {
        setSelected(option.value);
        onChange?.(option.value);
        setOptionsBoxDisplayed(false);
    };

    const filteredOptions = searchable
        ? options.filter((opt) =>
              opt.label.toLowerCase().includes(search.toLowerCase())
          )
        : options;

    const openOptionsBox = () => setOptionsBoxDisplayed(true);

    return {
        selected,
        search,
        setSearch,
        handleSelect,
        filteredOptions,
        optionsBoxDisplayed,
        setOptionsBoxDisplayed,
        openOptionsBox,
    };
};

export default useSelect;
