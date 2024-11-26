import { FC, MouseEvent, useEffect } from "react";
import useSelect from "./select.hooks";
import { OptionsBoxProps, SelectProps } from "./select.types";
import { FaChevronDown } from "@/assets/icons";
import { SelectWrapper } from "./select.styled";

const OptionsBox: FC<OptionsBoxProps> = ({
    filteredOptions,
    selected,
    handleSelect,
    isLoading,
    hasMore,
    loadMore,
    setOptionsBoxDisplayed,
    selectId,
}) => {
    useEffect(() => {
        const close = (e: MouseEvent<HTMLElement> | globalThis.MouseEvent) => {
            const element = e.target as Element;
            if (element.closest(`.techno_select_${selectId}`)) return;
            setOptionsBoxDisplayed(false);
        };

        document.addEventListener("click", close);

        return () => document.removeEventListener("click", close);
    }, [setOptionsBoxDisplayed, selectId]);

    return (
        <div className="absolute bg-white border z-10 border-gray-300 text-sm rounded w-full mt-1 max-h-[350px] overflow-auto">
            {filteredOptions.map((option) => (
                <div
                    key={option.value}
                    className={`p-2 cursor-pointer hover:bg-gray-100 ${
                        selected === option.value ? "bg-gray-200 font-bold" : ""
                    }`}
                    onClick={() => handleSelect(option)}
                >
                    {option.label}
                </div>
            ))}

            {isLoading && <div className="p-2 text-center">Loading...</div>}

            {hasMore && !isLoading && loadMore && (
                <div
                    className="p-2 text-center cursor-pointer hover:bg-gray-100"
                    onClick={loadMore}
                >
                    Load more
                </div>
            )}
        </div>
    );
};

const Select: FC<SelectProps<string | number>> = ({
    options,
    value,
    onChange,
    loadMore,
    isLoading,
    hasMore,
    searchable = false,
    defaultValue,
    size = "regular",
    label,
    bordered = true,
    shadow = false,
    radius = "8px",
    color = "primary",
    disabled = false,
}) => {
    const {
        selected,
        search,
        setSearch,
        handleSelect,
        filteredOptions,
        optionsBoxDisplayed,
        uniqueId,
        openOptionsBox,
        setOptionsBoxDisplayed,
    } = useSelect({
        options,
        value,
        onChange,
        defaultValue,
        searchable,
        disabled,
    });

    return (
        <SelectWrapper
            $size={size}
            $bordered={bordered}
            $shadow={shadow}
            $radius={radius}
            $color={color}
            className={`techno_select_${uniqueId} ${disabled && "disabled"}`}
        >
            {searchable && (
                <input
                    type="text"
                    placeholder="Search..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full border border-gray-300 rounded px-2 py-1 mb-2"
                />
            )}

            <div className="select">
                <div
                    className="p-2 top-box relative"
                    onClick={openOptionsBox}
                    role="button"
                >
                    {label && (
                        <span
                            className={`label block ${
                                selected ? "tiny" : "normal"
                            }`}
                        >
                            {label}
                        </span>
                    )}
                    {selected &&
                        options.find((opt) => opt.value === selected)?.label}
                    <FaChevronDown className="absolute right-[18px]" />
                </div>
                {optionsBoxDisplayed && (
                    <OptionsBox
                        setOptionsBoxDisplayed={setOptionsBoxDisplayed}
                        filteredOptions={filteredOptions}
                        handleSelect={handleSelect}
                        selected={selected}
                        isLoading={isLoading}
                        hasMore={hasMore}
                        selectId={uniqueId}
                        loadMore={loadMore}
                    />
                )}
            </div>
        </SelectWrapper>
    );
};

export default Select;
