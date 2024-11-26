import { getSalesOverTimeRequest } from "@/services/salesService/salesService";
import { formattedDate } from "@/utils/formatDate";
import BigNumber from "bignumber.js";
import { useQuery } from "react-query";
import { useSearchParams } from "react-router-dom";

const useSalesOverTime = () => {
    const [searchParams] = useSearchParams();
    const period = searchParams.get("period") || "semester";

    const {
        data: res,
        error,
        isLoading,
    } = useQuery({
        queryFn: () => getSalesOverTimeRequest({ period }),
        refetchOnWindowFocus: false,
        queryKey: ["salesOverTime", period],
    });

    const data = res?.code === "success" ? res.data : null;
    const errorMessage = res?.code === "error" ? res.error.message : null;

    const recordsCount = data?.length;

    const lowestSale =
        data &&
        data.length > 0 &&
        data?.reduce((prev, curr) => (prev.close < curr.close ? prev : curr));

    const {
        close: lowestClose,
        currency: lowestCurrency,
        date: lowestDate,
    } = lowestSale ? lowestSale : {};

    const highestSale =
        data &&
        data.length > 0 &&
        data?.reduce((prev, curr) => (prev.close > curr.close ? prev : curr));

    const {
        close: highestClose,
        date: highestDate,
        currency: highestCurrency,
    } = highestSale ? highestSale : {};

    const rows = [
        { key: "Records Taken", value: recordsCount },
        {
            key: "Lower Sale",
            value: `${new BigNumber(lowestClose ?? "").toFixed(
                2
            )} ${lowestCurrency} ${formattedDate(lowestDate ?? "")}`,
        },
        {
            key: "Highest Sale",
            value: `${new BigNumber(highestClose ?? "").toFixed(
                2
            )} ${highestCurrency} ${formattedDate(highestDate ?? "")}`,
        },
    ];

    return {
        data,
        error,
        rows,
        errorMessage,
        isLoading,
    };
};

export default useSalesOverTime;
