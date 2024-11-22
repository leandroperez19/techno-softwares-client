import { getAllCategoriesRequest } from "@/services/categoriesService/categoriesService";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";

const useCategories = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get("page") || "1";
    const [newCategoryModal, setNewCategoryModal] = useState(false);

    const openModal = () => setNewCategoryModal(true);

    const {
        data: res,
        error,
        isLoading,
        isFetching,
        refetch,
    } = useQuery({
        queryFn: () => getAllCategoriesRequest({ page }),
        queryKey: ["getCategories", page],
        refetchOnWindowFocus: false,
    });

    const data = res?.code === "success" ? res.data : null;
    const errorMessage = res?.code === "error" ? res.error.message : null;

    const table = useReactTable({
        data: data?.categories ? data?.categories : [],
        getCoreRowModel: getCoreRowModel(),
        columns: [
            {
                header: "ID",
                accessorKey: "id",
            },
            {
                header: "Name",
                accessorKey: "name",
            },
            {
                header: "Description",
                accessorKey: "description",
            },
        ],
    });

    const handleNextPage = () => {
        if (!data) return;
        if (data.canNext) setSearchParams({ page: String(data.page + 1) });
    };

    const handlePrevPage = () => {
        if (!data) return;
        if (data.canPrev) setSearchParams({ page: String(data.page - 1) });
    };

    return {
        goBack,
        error,
        isLoading,
        isFetching,
        data,
        errorMessage,
        table,
        handleNextPage,
        handlePrevPage,
        newCategoryModal,
        setNewCategoryModal,
        openModal,
        refetch,
    };
};

export default useCategories;
