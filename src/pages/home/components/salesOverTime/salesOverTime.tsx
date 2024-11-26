import { FC } from "react";
import { SalesOverTimeWrapper } from "./salesOverTime.styled";
import Box from "@/components/box/box";
import useSalesOverTime from "./salesOverTime.hooks";
import LineChart from "@/components/charts/lineChart/lineChart";
import Loader from "@/components/loader/loader";
import ErrorBox from "@/components/errorBox/errorBox";
import { useScreen } from "@/hooks/useScreen";

const SalesOverTime: FC = () => {
    const { data, isLoading, errorMessage, rows } = useSalesOverTime();
    const { isMobile, screen } = useScreen();

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
        <Box shadow className="p-6 md:col-span-2">
            <SalesOverTimeWrapper>
                <h3 className="font-bold text-lg text-center">
                    Progress of Sales profits
                </h3>
                <div className="mx-auto w-fit">
                    {data.length === 0 ? (
                        <div className="h-[150px] flex-center">
                            <h4 className="font-bold text-lg lg:text-[20px] text-center">
                                There's no data to compute on this chart, please
                                record a sale to show charts.
                            </h4>
                        </div>
                    ) : (
                        <LineChart
                            data={data.map((sale) => ({
                                ...sale,
                                date: sale.date.toISOString(),
                            }))}
                            width={
                                screen === "desktop"
                                    ? 920
                                    : isMobile
                                    ? 328
                                    : 700
                            }
                            height={
                                screen === "desktop"
                                    ? 400
                                    : isMobile
                                    ? 170
                                    : 350
                            }
                        />
                    )}
                </div>
                <div className="mt-4 grid gap-4">
                    {data.length > 0 &&
                        rows.map((row, i) => (
                            <div
                                key={i}
                                className="row flex w-full justify-between text-sm lg:text-base"
                            >
                                <span className="text-tertiary font-semibold">
                                    {row.key}
                                </span>
                                <span
                                    className={`text-light ${
                                        row.key === "Lower Sale"
                                            ? "text-primary"
                                            : "text-secondary"
                                    }`}
                                >
                                    {row.value}
                                </span>
                            </div>
                        ))}
                </div>
            </SalesOverTimeWrapper>
        </Box>
    );
};

export default SalesOverTime;
