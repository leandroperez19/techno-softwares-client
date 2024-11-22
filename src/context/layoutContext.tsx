import {
    createContext,
    Dispatch,
    MutableRefObject,
    SetStateAction,
} from "react";

const LayoutContext = createContext<LayoutContextProps | null>(null);

export type LayoutContextProps = {
    sidebarOpen: boolean | null;
    sidebarRef: MutableRefObject<HTMLDivElement | null>;
    setSidebarOpen: Dispatch<SetStateAction<boolean | null>>;
    sidebarToggle: () => void;
};

export default LayoutContext;
