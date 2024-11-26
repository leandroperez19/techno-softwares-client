import { FC } from "react";
import { CategoriesWrapper } from "./categories.styled";
import Button from "@/components/button/button";
import useCategories from "./categories.hooks";
import { FaArrowLeft } from "@/assets/icons";
import Table from "@/components/table/table";
import Loader from "@/components/loader/loader";
import ErrorBox from "@/components/errorBox/errorBox";
import CreateCategoryModal from "./components/createCategoryModal/createCategoryModal";
import Box from "@/components/box/box";

const Categories: FC = () => {
    const {
        goBack,
        table,
        isFetching,
        data,
        handleNextPage,
        handlePrevPage,
        isLoading,
        errorMessage,
        openModal,
        newCategoryModal,
        setNewCategoryModal,
        refetch,
    } = useCategories();

    if (isLoading)
        return (
            <div className="h-[100dvh] w-full flex-center">
                <Loader />
            </div>
        );

    if (errorMessage) return <ErrorBox text={errorMessage} />;

    if (!data)
        return (
            <ErrorBox text="Seems like you there's no categories registered yet, please create one." />
        );

    return (
        <CategoriesWrapper>
            {newCategoryModal && (
                <CreateCategoryModal
                    closeModal={setNewCategoryModal}
                    refetch={refetch}
                />
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
                        <h2>CATEGORIES MANAGEMENT</h2>
                    </div>
                    <Button
                        shadow
                        className="w-full px-5 mt-4 md:mt-0"
                        customCssClass="flex"
                        onClick={openModal}
                    >
                        Add New Category
                    </Button>
                </div>
                <div className="mt-6">
                    {data.categories.length === 0 ? (
                        <Box className="h-[400px] flex-center" shadow>
                            <h4 className="font-bold text-lg lg:text-[24px]">
                                Seems you haven't created any category yet,
                                please do so pressing the button above
                            </h4>
                        </Box>
                    ) : (
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
                    )}
                </div>
            </div>
        </CategoriesWrapper>
    );
};

export default Categories;
