import { Table } from "@tanstack/react-table";

export type TableProps<T> = {
    table: Table<T>;
    isFetching: boolean;
    pagination: {
        canPrev: boolean;
        canNext: boolean;
        handlePrevPage: () => void;
        handleNextPage: () => void;
    };
};
