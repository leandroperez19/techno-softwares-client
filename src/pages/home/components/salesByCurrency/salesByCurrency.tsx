import { FC } from "react";
import { SalesByCurrencyWrapper } from "./salesByCurrency.styled";
import Box from "@/components/box/box";
import PieChart from "@/components/charts/pieChart/pieChart";
import useSalesByCurrency from "./salesByCurrency.hooks";
import { COLORS } from "@/constants/colors";
import ErrorBox from "@/components/errorBox/errorBox";
import Loader from "@/components/loader/loader";

const SalesByCurrency: FC = () => {
    const { data, isLoading, errorMessage } = useSalesByCurrency();

    if (isLoading)
        return (
            <div className="mx-auto">
                <Loader />
            </div>
        );

    if (errorMessage) return <ErrorBox text={errorMessage} />;

    if (!data)
        return (
            <ErrorBox text="Seems like you there's no sale within this time span, please record one or change the filter." />
        );

    return (
        <Box shadow className="p-6">
            <SalesByCurrencyWrapper>
                <h3 className="font-bold text-lg text-center max-w-[250px] mx-auto">
                    Percentage of Sales Profits by Currency
                </h3>
                <div className="xl:flex xl:items-end xl:justify-between">
                    <div className="mx-auto w-fit mt-4 xl:mx-0">
                        <PieChart
                            data={data.map((sale) => ({
                                value: sale.value,
                            }))}
                            width={230}
                            height={230}
                            colors={COLORS}
                            donut
                            fontSize="12px"
                        />
                    </div>
                    <div className="mt-4 grid gap-2 lg:basis-[35%] lg:gap-6">
                        {data.map((sale, i) => (
                            <div
                                className="row flex w-full justify-between"
                                key={sale.currency + i}
                            >
                                <span className="text-sm lg:text-md text-tertiary font-semibold lg:text-base">
                                    {sale.currency}
                                </span>
                                <div
                                    className="rounded-full h-4 w-4"
                                    style={{ backgroundColor: COLORS[i] }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </SalesByCurrencyWrapper>
        </Box>
    );
};

export default SalesByCurrency;
