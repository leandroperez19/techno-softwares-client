import { FC, MouseEvent, useEffect } from "react";
import { DateFilterModalWrapper, DateFilterWrapper } from "./dateFilter.styled";
import { FaChevronDown } from "@/assets/icons";
import useDateFilter from "./dateFilter.hooks";
import { DateFilterModalProps, DateFilterProps } from "./dateFilter.types";
import { dates } from "./dateFilter.data";

const DateFilterModal: FC<DateFilterModalProps> = ({
    backgroundTouchable,
    modalToggle,
    selectDate,
    modalRef,
}) => {
    useEffect(() => {
        if (backgroundTouchable) return;

        const close = (e: MouseEvent<HTMLElement> | globalThis.MouseEvent) => {
            const element = e.target as Element;
            if (element.closest(".panel_date_filter")) return;
            modalToggle();
        };

        document.addEventListener("click", close);

        return () => document.removeEventListener("click", close);
    }, [backgroundTouchable, modalToggle]);

    return (
        <DateFilterModalWrapper
            className={
                backgroundTouchable ? "with-background" : "no-background"
            }
            ref={modalRef}
        >
            <div className="modal global_popUp">
                {dates.map((date) => (
                    <div
                        role="button"
                        key={date.key}
                        className="section"
                        onClick={() => selectDate(date.value)}
                    >
                        {date.key}
                    </div>
                ))}
            </div>
            {backgroundTouchable && (
                <div
                    className="background-touchable global_opacityOn"
                    onClick={modalToggle}
                ></div>
            )}
        </DateFilterModalWrapper>
    );
};

const DateFilter: FC<DateFilterProps> = ({
    backgroundTouchable = false,
    onChange,
}) => {
    const { selectedDate, modalOpen, modalToggle, modalRef, selectDate } =
        useDateFilter(onChange);

    return (
        <DateFilterWrapper
            className={`${
                backgroundTouchable ? "" : "relative panel_date_filter"
            } ${modalOpen ? "modal-open" : ""}`}
        >
            <div
                className="toggle flex gap-2 justify-between items-center"
                onClick={modalToggle}
                role="button"
            >
                <span className="text-sm font-medium">
                    {dates.find((date) => date.value === selectedDate)?.key ??
                        ""}
                </span>
                <FaChevronDown
                    fontSize={10}
                    fontWeight={300}
                    className="arrow"
                />
            </div>
            {modalOpen && (
                <DateFilterModal
                    backgroundTouchable={backgroundTouchable}
                    modalToggle={modalToggle}
                    modalRef={modalRef}
                    selectDate={selectDate}
                />
            )}
        </DateFilterWrapper>
    );
};

export default DateFilter;
