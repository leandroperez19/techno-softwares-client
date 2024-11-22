import { useUser } from "@/hooks/useUser";
import { useValidator } from "@/hooks/useValidator";
import { userSignUpSchema } from "@/schemas/authSchemas";
import { signUpRequest } from "@/services/authService/authService";
import { SignUpPayload } from "@/services/authService/authService.types";
import { useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

const useRegister = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        reset,
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useValidator({
        resolver: userSignUpSchema,
    });

    const { setUser } = useUser();

    const { mutateAsync } = useMutation({
        mutationFn: (payload: SignUpPayload) => signUpRequest(payload),
    });

    const onSubmit = async (data: SignUpPayload) => {
        const validData = userSignUpSchema.safeParse(data);
        if (!validData.success) return;

        setIsSubmitting(true);
        const res = await mutateAsync(validData.data);
        setIsSubmitting(false);

        if (res.code === "success") {
            setUser(res.data.user);
            toast("User created successfully", { type: "success" });
            reset();
            return;
        }

        toast(res.error.message, { type: "error" });
    };

    return {
        onSubmit,
        register,
        handleSubmit,
        errors,
        isSubmitting,
        isValid,
    };
};

export default useRegister;
