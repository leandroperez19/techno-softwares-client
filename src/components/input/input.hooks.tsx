import { FocusEvent, useCallback, useRef, useState } from "react";
import { InputProps } from "./input.types";
import {
    FaRegEye,
    FaRegEyeSlash,
    MdErrorOutline,
    MdOutlineCheckCircle,
} from "@/assets/icons";

const useInput = (type: InputProps["type"]) => {
    const [inputValAux, setInputValAux] = useState<string | null | number>(
        null
    );
    const [isInputPassword, setIsInputPassword] = useState(type);
    const ref = useRef<HTMLDivElement | null>(null);
    const input = ref.current?.querySelector("input");

    const seePassword = () => {
        if (type !== "password") return;
        if (isInputPassword === "password") {
            setIsInputPassword("text");
            input?.focus();
            return;
        }
        input?.focus();
        setIsInputPassword("password");
    };

    const returnPasswordIcon = () => {
        if (type !== "password") return null;
        if (isInputPassword === "password") {
            return (
                <FaRegEye size={24} data-testid="VisibilityOffOutlinedIcon" />
            );
        }
        return <FaRegEyeSlash size={24} data-testid="VisibilityOutlinedIcon" />;
    };

    const returnIcon = (
        showStatusIcon: boolean,
        error: boolean,
        success: boolean
    ) => {
        if (!showStatusIcon) return null;
        if (error && !success) {
            return (
                <div className="status-icon mr-3 z-10 absolute global_popUp">
                    <MdErrorOutline color="#f00" size={24} />
                </div>
            );
        }
        if (!error && success) {
            return (
                <div className="status-icon mr-3 z-10 absolute global_popUp">
                    <MdOutlineCheckCircle
                        color="#00c300"
                        size={24}
                        data-testid="CheckCircleOutlineIcon"
                    />
                </div>
            );
        }
        return null;
    };

    const onBlurValue = useCallback(
        (e: FocusEvent<HTMLInputElement, Element>) =>
            setInputValAux(e.target.value),
        []
    );

    return {
        isInputPassword,
        inputValAux,
        ref,
        input,
        seePassword,
        returnPasswordIcon,
        onBlurValue,
        returnIcon,
    };
};

export default useInput;
