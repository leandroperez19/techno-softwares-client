import { useEffect, useRef } from "react";
import { SideModalProps } from "./sideModal.types";

const useSideModal = (
    closeModal: SideModalProps["closeModal"],
    closeButton: string
) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);

    const modalToggle = () => {
        modalRef.current?.classList.add("closing");
        setTimeout(() => {
            closeModal(false);
        }, 300);
        return null;
    };

    useEffect(() => {
        const button: HTMLButtonElement | null = document.querySelector(
            `[side-modal-close-button=${closeButton}]`
        );

        if (!button) return;

        button.addEventListener("click", modalToggle);

        return () => button.removeEventListener("click", modalToggle);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        modalRef,
        backgroundRef,
        modalToggle,
    };
};

export default useSideModal;
