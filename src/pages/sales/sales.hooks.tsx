import { getSalesRequest } from "@/services/salesService/salesService";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import BigNumber from "bignumber.js";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate, useSearchParams } from "react-router-dom";

const useSales = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const [searchParams, setSearchParams] = useSearchParams();
    const page = searchParams.get("page") || "1";
    const [newSaleModal, setNewSaleModal] = useState(false);

    const {
        data: res,
        error,
        isLoading,
        isFetching,
        refetch,
    } = useQuery({
        queryFn: () => getSalesRequest({ page }),
        queryKey: ["getSalesRequest", page],
        refetchOnWindowFocus: false,
    });

    const data = res?.code === "success" ? res.data : null;
    const errorMessage = res?.code === "error" ? res.error.message : null;

    const table = useReactTable({
        data: data?.sales ? data?.sales : [],
        getCoreRowModel: getCoreRowModel(),
        columns: [
            {
                header: "ID",
                accessorKey: "id",
            },
            {
                header: "Item Name",
                accessorKey: "itemName",
            },
            {
                header: "Description",
                accessorKey: "description",
            },
            {
                header: "Amount",
                accessorFn: ({ amount }) => new BigNumber(amount).toFixed(2),
                accessorKey: "amount",
            },
            {
                header: "Currency",
                accessorKey: "currency",
            },
            {
                header: "Registered By",
                accessorFn: ({ user }) => user.userName,
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

    const openModal = () => setNewSaleModal(true);

    return {
        goBack,
        data,
        error,
        errorMessage,
        isLoading,
        table,
        isFetching,
        newSaleModal,
        refetch,
        setNewSaleModal,
        handleNextPage,
        handlePrevPage,
        openModal,
    };
};

export default useSales;
