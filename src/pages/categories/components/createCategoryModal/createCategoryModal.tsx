import { FC } from "react";
import SideModal from "@/components/sideModal/sideModal";
import Input from "@/components/input/input";
import Button from "@/components/button/button";
import { CreateCategoryModalWrapper } from "./createCategoryModal.styled";
import { NewCategoryModalProps } from "./createCategoryModal.types";
import useCreateCategoryModal from "./createCategoryModal.hooks";

const CreateCategoryModal: FC<NewCategoryModalProps> = ({
    closeModal,
    refetch,
}) => {
    const { register, errors, onSubmit, handleSubmit, isValid } =
        useCreateCategoryModal(closeModal, refetch);

    return (
        <SideModal closeModal={closeModal}>
            <CreateCategoryModalWrapper>
                <h4 className="text-lg font-bold lg:text-[32px] mt-3">
                    Create Category
                </h4>
                <h2 className="mt-6 text-base font-bold lg:text-xl">Data</h2>
                <form
                    className="mt-6 flex-col gap-3"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Input
                        label="Name"
                        {...register("name", {
                            required: true,
                        })}
                        errorMessage={errors.name?.message}
                    />
                    <textarea
                        placeholder="Description"
                        className="block resize-none p-4 text-sm border rounded-lg border-gray-400 w-full min-h-[200px]"
                        {...register("description", {
                            required: true,
                        })}
                    ></textarea>
                    <span className="text-xs text-red-500">
                        {errors.description?.message}
                    </span>
                    <Button
                        className="w-full mt-4"
                        radius="24px"
                        customCssClass="lg:col-span-2"
                        disabled={!isValid}
                    >
                        Save Sale
                    </Button>
                </form>
            </CreateCategoryModalWrapper>
        </SideModal>
    );
};

export default CreateCategoryModal;
