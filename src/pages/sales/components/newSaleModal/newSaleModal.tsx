import { FC } from "react";
import { NewSaleModalWrapper } from "./newSaleModal.styled";
import SideModal from "@/components/sideModal/sideModal";
import { NewSaleModalProps } from "./newSaleModal.types";
import Select from "@/components/select/select";
import Input from "@/components/input/input";
import useNewSaleModal from "./newSaleModal.hooks";
import Button from "@/components/button/button";
import { Link } from "react-router-dom";

const NewSaleModal: FC<NewSaleModalProps> = ({ closeModal, refetch }) => {
    const {
        register,
        errors,
        currencyOptions,
        itemTypeOptions,
        data,
        isButtonDisabled,
        handleChange,
        onSubmit,
        handleSubmit,
    } = useNewSaleModal(closeModal, refetch);

    return (
        <SideModal closeModal={closeModal}>
            <NewSaleModalWrapper>
                <h4 className="text-lg font-bold lg:text-[32px] mt-3">
                    Record Sale
                </h4>
                <h2 className="mt-6 text-base font-bold lg:text-xl">Data</h2>
                <form
                    className="mt-6 grid gap-3 lg:grid-cols-2"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input
                        label="Item Name"
                        {...register("itemName", {
                            required: true,
                        })}
                        errorMessage={errors.itemName?.message}
                    />
                    <Input
                        label="Description"
                        {...register("description", {
                            required: true,
                        })}
                        errorMessage={errors.description?.message}
                    />
                    <Input
                        label="Amount"
                        type="number"
                        {...register("amount", {
                            required: true,
                        })}
                        errorMessage={errors.amount?.message}
                        step="0.01"
                    />
                    <div
                        className={`date relative h-[48px] ${
                            errors.date?.message
                                ? "border-[2px] border-red-500"
                                : "border border-[#A6A6A6]"
                        } rounded-lg flex items-center px-5`}
                    >
                        <input
                            type="datetime-local"
                            className="w-full h-[38px] border-none outline-none text-sm"
                            {...register("date", {
                                required: true,
                            })}
                        />
                        <span
                            className={`label pointer-events-none absolute left-[18px] text-tiny font-semibold ${
                                errors.date?.message
                                    ? "text-red-500"
                                    : "text-secondary"
                            } top-[50%] translate-y-[-160%]`}
                        ></span>
                        <span className="bottom-[-20px] absolute left-0 text-xs text-red-500">
                            {errors.date?.message}
                        </span>
                    </div>
                    <Select
                        options={currencyOptions}
                        label="Currency"
                        onChange={(val) => handleChange("currency", val)}
                    />
                    <Select
                        options={itemTypeOptions}
                        label="Item Type"
                        onChange={(val) => handleChange("itemType", val)}
                    />
                    <div className="mt-6 lg:col-span-2">
                        {data?.categories.length === 0 && (
                            <span className="text-red-500 text-sm pb-2 block">
                                Seems you haven't created any categories yet,
                                please create one in order to create a sale.{" "}
                                <Link
                                    to={"/categories"}
                                    className="text-blue-500 underline"
                                >
                                    Categories
                                </Link>
                            </span>
                        )}
                        <Select
                            label="Category"
                            options={
                                data?.categories.map((category) => ({
                                    label: category.name,
                                    value: category.id,
                                })) ?? []
                            }
                            onChange={(val) => handleChange("categoryId", val)}
                            disabled={data?.categories.length === 0}
                        />
                    </div>
                    <Button
                        className="w-full mt-4"
                        radius="24px"
                        customCssClass="lg:col-span-2"
                        disabled={isButtonDisabled}
                    >
                        Save Sale
                    </Button>
                </form>
            </NewSaleModalWrapper>
        </SideModal>
    );
};

export default NewSaleModal;
