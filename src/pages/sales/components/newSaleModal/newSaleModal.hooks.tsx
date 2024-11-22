import { useValidator } from "@/hooks/useValidator";
import {
    createSaleFullSchema,
    createSaleSchema,
    createSaleSchemaFormPayload,
} from "@/schemas/salesSchema";
import { getAllCategoriesRequest } from "@/services/categoriesService/categoriesService";
import { createSaleRequest } from "@/services/salesService/salesService";
import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { NewSaleModalProps } from "./newSaleModal.types";

const currencyOptions = [
    {
        label: "EURO",
        value: "EUR",
    },
    {
        label: "DOLAR",
        value: "USD",
    },
    {
        label: "POUND",
        value: "GBP",
    },
];
const itemTypeOptions = [
    { label: "Electronics", value: "Electronics" },
    { label: "Clothing", value: "Clothing" },
    { label: "Groceries", value: "Groceries" },
    { label: "Books", value: "Books" },
    { label: "Furniture", value: "Furniture" },
    { label: "Toys", value: "Toys" },
    { label: "Accessories", value: "Accessories" },
    { label: "Other", value: "Other" },
];

interface OtherData {
    currency?: string | number;
    itemType?: string | number;
    categoryId?: string | number;
}

const useNewSaleModal = (
    closeModal: NewSaleModalProps["closeModal"],
    refetch: NewSaleModalProps["refetch"]
) => {
    const [otherData, setOtherData] = useState<OtherData>({});

    const handleChange = (key: keyof OtherData, value: string | number) => {
        setOtherData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useValidator({
        resolver: createSaleSchema,
    });

    const { data: res, error } = useQuery({
        queryFn: () => getAllCategoriesRequest({ limit: "50" }),
        queryKey: ["getAllCategories"],
        refetchOnWindowFocus: false,
    });

    const data = res?.code === "success" ? res.data : null;
    const errorMessage = res?.code === "error" ? res.error.message : null;

    const { mutateAsync } = useMutation({
        mutationFn: createSaleRequest,
        mutationKey: ["createSale"],
    });

    const onSubmit = async (payload: createSaleSchemaFormPayload) => {
        const fullData = {
            ...payload,
            ...otherData,
        };
        const validData = createSaleFullSchema.safeParse(fullData);
        if (!validData.success)
            return toast("Seems you're missing some data, please check.", {
                type: "warning",
            });

        const res = await mutateAsync(validData.data);

        if (res.code === "error")
            return toast(res.error.message, {
                type: "error",
            });

        toast(res.data.message, { type: "success" });
        reset();
        refetch();
        closeModal(false);
    };

    return {
        register,
        errors,
        currencyOptions,
        itemTypeOptions,
        data,
        errorMessage,
        error,
        handleSubmit,
        handleChange,
        onSubmit,
    };
};

export default useNewSaleModal;
