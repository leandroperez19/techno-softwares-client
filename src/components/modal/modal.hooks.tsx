import { useEffect, useRef } from "react";
import { ModalProps } from "./modal.types";

const useModal = (
    closeModal: ModalProps["closeModal"],
    closeButton: string
) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const backgroundRef = useRef<HTMLDivElement>(null);

    const modalToggle = () => {
        backgroundRef.current?.classList.replace(
            "global_opacityOn",
            "global_opacityOff"
        );
        modalRef.current?.classList.add("inactive");
        setTimeout(() => {
            closeModal(false);
        }, 300);
        return null;
    };

    useEffect(() => {
        const button: HTMLButtonElement | null = document.querySelector(
            `[modal-close-button=${closeButton}]`
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

export default useModal;
