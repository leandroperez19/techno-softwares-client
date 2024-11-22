import { FC } from "react";
import { ModalProps } from "./modal.types";
import { ModalWrapper } from "./modal.styled";
import useModal from "./modal.hooks";
import { createPortal } from "react-dom";

const Modal: FC<ModalProps> = ({
    children,
    mobileNativeStyle = false,
    animation = "scale-center",
    closeButton = "modal",
    className,
    containerClassName,
    padding = "12px",
    radius = "12px",
    closeModal,
}) => {
    const { modalToggle, modalRef, backgroundRef } = useModal(
        closeModal,
        closeButton
    );
    const root = document.getElementById("root") ?? document.body;

    return createPortal(
        <ModalWrapper
            $animation={animation}
            $mobileNativeNavigation={mobileNativeStyle}
            className={containerClassName}
            $padding={padding}
            $radius={radius}
            ref={modalRef}
        >
            <div
                className={`techno-modal ${className}`}
                data-test-id="techno-modal"
            >
                {children}
            </div>
            <div
                className="background-touchable modal_background global_opacityOn"
                onClick={modalToggle}
                ref={backgroundRef}
                data-test-id="modal-background-touchable"
            />
        </ModalWrapper>,
        root
    );
};

export default Modal;
