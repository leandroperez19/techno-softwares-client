import { getSalesByCurrencyRequest } from "@/services/salesService/salesService";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

const useSalesByCurrency = () => {
    const [searchParams] = useSearchParams();
    const period = searchParams.get("period") || "semester";

    const {
        data: res,
        error,
        isLoading,
    } = useQuery({
        queryFn: () =>
            getSalesByCurrencyRequest({
                period,
            }),
        refetchOnWindowFocus: false,
        queryKey: ["salesByCurrency", period],
    });

    const data = res?.code === "success" ? res.data : null;
    const errorMessage = res?.code === "error" ? res.error.message : null;

    return {
        data,
        error,
        isLoading,
        errorMessage,
    };
};

export default useSalesByCurrency;
