import { Dispatch, SetStateAction } from "react";
import {
    QueryObserverResult,
    RefetchOptions,
    RefetchQueryFilters,
} from "react-query";

export type NewCategoryModalProps = {
    closeModal: Dispatch<SetStateAction<boolean>>;
    refetch: <TPageData>(
        options?: RefetchOptions & RefetchQueryFilters<TPageData>
    ) => Promise<QueryObserverResult<unknown, unknown>>;
};
