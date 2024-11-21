import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

type UseValidatorProps<T extends z.ZodTypeAny> = {
    resolver: T;
    mode?: "all" | "onBlur" | "onChange" | "onSubmit" | "onTouched";
};

export const useValidator = <T extends z.ZodTypeAny>({
    resolver,
    mode = "all",
}: UseValidatorProps<T>) => {
    const {
        reset,
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        formState,
    } = useForm<z.infer<T>>({
        resolver: zodResolver(resolver),
        mode,
    });

    return {
        reset,
        register,
        handleSubmit,
        watch,
        setValue,
        getValues,
        formState,
    };
};
