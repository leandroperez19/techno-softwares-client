import { FC } from "react";
import { SalesWrapper } from "./sales.styled";
import Button from "@/components/button/button";
import { FaArrowLeft } from "@/assets/icons";
import useSales from "./sales.hooks";
import Loader from "@/components/loader/loader";
import ErrorBox from "@/components/errorBox/errorBox";
import Table from "@/components/table/table";
import NewSaleModal from "./components/newSaleModal/newSaleModal";

const Sales: FC = () => {
    const {
        data,
        isLoading,
        errorMessage,
        table,
        isFetching,
        newSaleModal,
        setNewSaleModal,
        goBack,
        handleNextPage,
        handlePrevPage,
        openModal,
        refetch,
    } = useSales();

    if (isLoading)
        return (
            <div className="h-[100dvh] w-full flex-center">
                <Loader />
            </div>
        );

    if (errorMessage) return <ErrorBox text={errorMessage} />;

    if (!data)
        return (
            <ErrorBox text="Seems like you there's no sales registered yet, please record one." />
        );

    return (
        <SalesWrapper>
            {newSaleModal && (
                <NewSaleModal closeModal={setNewSaleModal} refetch={refetch} />
            )}
            <div className="content">
                <div className="top md:flex md:justify-between md:items-center">
                    <div className="text-fifthly text-xl font-semibold mt-[18px] gap-4 flex items-center md:mt-0">
                        <Button
                            size="xs"
                            className="px-2"
                            customCssClass="flex"
                            color="transparent"
                            onClick={goBack}
                        >
                            <FaArrowLeft />
                        </Button>
                        <h2>SALES MANAGEMENT</h2>
                    </div>
                    <Button
                        shadow
                        className="w-full px-5 mt-4 md:mt-0"
                        customCssClass="flex"
                        onClick={openModal}
                    >
                        Add New Sale
                    </Button>
                </div>
                <div className="mt-6">
                    <Table
                        table={table}
                        isFetching={isFetching}
                        pagination={{
                            canNext: data.canNext,
                            canPrev: data.canPrev,
                            handlePrevPage: handlePrevPage,
                            handleNextPage: handleNextPage,
                        }}
                    />
                </div>
            </div>
        </SalesWrapper>
    );
};

export default Sales;
