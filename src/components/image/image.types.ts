import { HTMLAttributes } from "react";

export interface ImageProps extends HTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
}
