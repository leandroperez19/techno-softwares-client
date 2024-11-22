import Box from "@/components/box/box";
import { SalesByCategoryWrapper } from "./salesByCategory.styled";
import useSalesByCategory from "./salesByCategory.hooks";
import PieChart from "@/components/charts/pieChart/pieChart";
import { COLORS } from "@/constants/colors";
import { FC } from "react";
import Loader from "@/components/loader/loader";
import ErrorBox from "@/components/errorBox/errorBox";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

const SalesByCategory: FC = () => {
    const { data, isLoading, errorMessage } = useSalesByCategory();

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
            <SalesByCategoryWrapper>
                <h3 className="font-bold text-lg text-center max-w-[200px] mx-auto">
                    Percentage of Sales by Category
                </h3>
                <div className="xl:flex xl:justify-between xl:items-end">
                    <div className="mx-auto w-fit mt-4 xl:mx-0">
                        <PieChart
                            data={data.map((sale) => ({
                                value: sale.percentage,
                            }))}
                            width={230}
                            height={230}
                            colors={COLORS.slice(2, -1)}
                            fontSize="12px"
                        />
                    </div>
                    <Swiper
                        direction="vertical"
                        slidesPerView={"auto"}
                        freeMode={true}
                        mousewheel
                        grabCursor
                        modules={[FreeMode, Mousewheel]}
                    >
                        <SwiperSlide>
                            <div className="mt-4 grid gap-2 lg:basis-[35%] lg:gap-6">
                                {data.map((sale, i) => (
                                    <div
                                        className="row flex w-full justify-between"
                                        key={sale.category.name + i}
                                    >
                                        <span className="text-sm lg:text-md text-tertiary font-semibold lg:text-base">
                                            {sale.category.name}
                                        </span>
                                        <div
                                            className="rounded-full h-4 w-4"
                                            style={{
                                                backgroundColor: COLORS.slice(
                                                    2,
                                                    -1
                                                )[i],
                                            }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </SalesByCategoryWrapper>
        </Box>
    );
};

export default SalesByCategory;
