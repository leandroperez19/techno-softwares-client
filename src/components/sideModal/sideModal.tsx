import { FC } from "react";
import { SideModalProps } from "./sideModal.types";
import { SideModalWrapper } from "./sideModal.styled";
import useSideModal from "./sideModal.hooks";
import { createPortal } from "react-dom";
import Button from "../button/button";
import { IoClose } from "@/assets/icons";

const SideModal: FC<SideModalProps> = ({
    children,
    closeModal,
    closeButton = "sideModal",
    closeOnX = true,
}) => {
    const { modalToggle, modalRef } = useSideModal(closeModal, closeButton);
    const root = document.getElementById("root") ?? document.body;

    return createPortal(
        <SideModalWrapper ref={modalRef}>
            <div className="modal">
                {closeOnX && (
                    <Button
                        color="transparent"
                        customCssClass="flex absolute right-[24px]"
                        className="px-2"
                        size={"regular"}
                        onClick={modalToggle}
                    >
                        <IoClose className="text-2xl lg:text-3xl text-[#a3a3a3]" />
                    </Button>
                )}
                {children}
            </div>
            <div
                className="background-touchable modal_background global_opacityOn"
                onClick={modalToggle}
            />
        </SideModalWrapper>,
        root
    );
};

export default SideModal;
