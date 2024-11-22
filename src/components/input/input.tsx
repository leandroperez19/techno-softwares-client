import { forwardRef } from "react";
import { InputWrapper } from "./input.styled";
import { InputProps } from "./input.types";
import useInput from "./input.hooks";

const Input = forwardRef<HTMLInputElement, InputProps>(
    (
        {
            type = "text",
            errorMessage,
            error = Boolean(errorMessage),
            disabled = false,
            label,
            placeholder,
            customCssClass = "tek_input",
            size = "medium",
            bordered = true,
            icon,
            labelFocusFont = "10px",
            labelFont = "14px",
            labelColor = null,
            labelColorFocus = null,
            showStatusIcon = false,
            success = null,
            elevated = false,
            color = "primary",
            showErrorMessage = true,
            radius = "8px",
            shadow = false,
            labelClassName,
            value,
            staticLabel = false,
            step,
            ...props
        },
        ref
    ) => {
        const {
            inputValAux,
            isInputPassword,
            ref: inputReference,
            onBlurValue,
            returnIcon,
            seePassword,
            returnPasswordIcon,
        } = useInput(type);

        return (
            <InputWrapper
                $error={error}
                $success={Boolean(success)}
                $disabled={disabled}
                $size={size}
                $bordered={bordered}
                $labelFocusFont={labelFocusFont}
                $labelFont={labelFont}
                $labelColor={labelColor}
                $labelColorFocus={labelColorFocus}
                $icon={Boolean(icon)}
                $showStatusIcon={showStatusIcon}
                $type={type}
                className={`${customCssClass} custom_input`}
                $color={color}
                $radius={radius}
                $shadow={shadow}
            >
                {label && elevated && (
                    <span className={`label-elevated ${labelClassName}`}>
                        {label}
                    </span>
                )}
                <div
                    className={`input ${inputValAux ? "full" : "empty"} ${
                        error ? "error" : "regular"
                    } ${staticLabel ? "label-static" : "label-dynamic"}`}
                    ref={inputReference}
                >
                    {icon && icon}
                    {label && !elevated && (
                        <span className={`label block ${labelClassName}`}>
                            {label}
                        </span>
                    )}
                    <input
                        type={type === "password" ? isInputPassword : type}
                        ref={ref}
                        placeholder={placeholder}
                        disabled={disabled}
                        autoComplete="off"
                        onBlurCapture={onBlurValue}
                        value={value}
                        step={step}
                        {...props}
                    />
                    <div
                        onClick={seePassword}
                        className="eye-icon"
                        role="button"
                        aria-hidden
                    >
                        {returnPasswordIcon()}
                    </div>
                    {returnIcon(showStatusIcon, error, Boolean(success))}
                </div>
                {showErrorMessage && (
                    <div className="error">
                        {error && errorMessage && (
                            <span className="error-message">
                                {errorMessage}
                            </span>
                        )}
                    </div>
                )}
            </InputWrapper>
        );
    }
);

export default Input;
