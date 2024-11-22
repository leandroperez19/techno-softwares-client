import { Dispatch, SetStateAction } from "react";
import {
    QueryObserverResult,
    RefetchOptions,
    RefetchQueryFilters,
} from "react-query";

export type NewSaleModalProps = {
    closeModal: Dispatch<SetStateAction<boolean>>;
    refetch: <TPageData>(
        options?: RefetchOptions & RefetchQueryFilters<TPageData>
    ) => Promise<QueryObserverResult<unknown, unknown>>;
};
