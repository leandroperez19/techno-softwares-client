import { useValidator } from "@/hooks/useValidator";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import { NewCategoryModalProps } from "./createCategoryModal.types";
import { crateCategoryPayload } from "@/services/categoriesService/categoriesService.types";
import { createCategorySchema } from "@/schemas/categoriesSchema";
import { createCategoryRequest } from "@/services/categoriesService/categoriesService";

const useCreateCategoryModal = (
    closeModal: NewCategoryModalProps["closeModal"],
    refetch: NewCategoryModalProps["refetch"]
) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useValidator({
        resolver: createCategorySchema,
    });

    const { mutateAsync } = useMutation({
        mutationFn: createCategoryRequest,
        mutationKey: ["createSale"],
    });

    const onSubmit = async (payload: crateCategoryPayload) => {
        const res = await mutateAsync(payload);

        if (res.code === "error")
            return toast(res.error.message, {
                type: "error",
            });

        toast("Category created successfully", { type: "success" });
        reset();
        refetch();
        closeModal(false);
    };

    return {
        register,
        errors,
        handleSubmit,
        onSubmit,
    };
};

export default useCreateCategoryModal;
