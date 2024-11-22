import { getSalesByCategoryRequest } from "@/services/salesService/salesService";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

const useSalesByCategory = () => {
    const [searchParams] = useSearchParams();
    const period = searchParams.get("period") || "semester";

    const {
        data: res,
        error,
        isLoading,
    } = useQuery({
        queryFn: () => getSalesByCategoryRequest({ period }),
        refetchOnWindowFocus: false,
        queryKey: ["salesByCategory", period],
    });

    const data = res?.code === "success" ? res.data : null;
    const errorMessage = res?.code === "error" ? res.error.message : null;

    return {
        data,
        error,
        errorMessage,
        isLoading,
    };
};

export default useSalesByCategory;
