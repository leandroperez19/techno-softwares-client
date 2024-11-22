import Default from "@/layouts/default/default";
import { FC } from "react";
import { HomeWrapper } from "./home.styled";
import SalesByCurrency from "./components/salesByCurrency/salesByCurrency";
import SalesByCategory from "./components/salesByCategory/salesByCategory";
import SalesOverTime from "./components/salesOverTime/salesOverTime";
import DateFilter from "@/components/dateFilter/dateFilter";
import useHome from "./home.hooks";
import Button from "@/components/button/button";

const Home: FC = () => {
    const { dateFilterChange, goToDetails } = useHome();

    return (
        <Default>
            <HomeWrapper>
                <div className="content">
                    <div className="w-full flex justify-end">
                        <DateFilter
                            onChange={(period) => dateFilterChange(period)}
                        />
                    </div>
                    <div className="charts grid gap-4 mt-4 md:grid-cols-2">
                        <SalesByCurrency />
                        <SalesByCategory />
                        <SalesOverTime />
                    </div>
                    <Button
                        className="w-full mt-4"
                        radius="40px"
                        onClick={goToDetails}
                    >
                        See Sales Details
                    </Button>
                </div>
            </HomeWrapper>
        </Default>
    );
};

export default Home;
