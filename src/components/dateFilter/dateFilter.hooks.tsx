import { useRef, useState } from "react";

const useDateFilter = (onChange?: (x: string) => void) => {
    const [selectedDate, setSelectedDate] = useState<string>("semester");
    const [modalOpen, setModalOpen] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    const modalToggle = () => {
        if (!modalOpen) {
            setModalOpen(true);
            return null;
        }
        modalRef.current?.classList.add("inactive");
        setTimeout(() => {
            setModalOpen(false);
        }, 300);
        return null;
    };

    const selectDate = (date: string) => {
        setSelectedDate(date);
        if (onChange) onChange(date);
        modalToggle();
    };

    return {
        selectedDate,
        setSelectedDate,
        modalOpen,
        setModalOpen,
        modalToggle,
        modalRef,
        selectDate,
    };
};

export default useDateFilter;
