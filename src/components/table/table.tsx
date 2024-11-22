import { FC } from "react";
import { TableWrapper } from "./table.styled";
import { TableProps } from "./table.types";
import Button from "../button/button";
import { flexRender } from "@tanstack/react-table";
import { FaChevronLeft } from "@/assets/icons";
import { FaChevronRight } from "react-icons/fa";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Table: FC<TableProps<any>> = ({
    table,
    isFetching,
    pagination: { canPrev, canNext, handlePrevPage, handleNextPage },
}) => {
    return (
        <TableWrapper>
            <table className="w-full">
                <thead className="text-sm text-secondary bg-[#f5fcfb] h-[76px]">
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header, i) => (
                                <th
                                    key={header.id + i}
                                    className="text-left p-[16px] font-normal"
                                    onClick={header.column.getToggleSortingHandler()}
                                >
                                    {flexRender(
                                        header.column.columnDef.header,
                                        header.getContext()
                                    )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody className="rounded-[16px] text-sm bg-white">
                    {table.getRowModel().rows.map((row, i) => (
                        <tr key={row.id + i} className="relative">
                            {row.getVisibleCells().map((cell) => (
                                <td
                                    className="text-left p-[16px]"
                                    key={cell.id}
                                >
                                    {flexRender(
                                        cell.column.columnDef.cell,
                                        cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination-buttons py-3 flex gap-3 mx-auto w-fit">
                <Button
                    className="px-3"
                    size="sm"
                    color="transparent"
                    disabled={isFetching || !canPrev}
                    onClick={handlePrevPage}
                >
                    <FaChevronLeft />
                </Button>
                <Button
                    className="px-3"
                    size="sm"
                    color="transparent"
                    onClick={handleNextPage}
                    disabled={isFetching || !canNext}
                >
                    <FaChevronRight />
                </Button>
            </div>
        </TableWrapper>
    );
};

export default Table;
