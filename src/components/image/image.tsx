import { forwardRef, SyntheticEvent } from "react";
import { ImageProps } from "./image.types";
import fallbackImageUrl from "@/assets/static/unsupported-image.svg";

const Image = forwardRef<HTMLImageElement, ImageProps>(
    ({ src, alt, ...props }, ref) => {
        const handleImageError = (
            event: SyntheticEvent<HTMLImageElement, Event>
        ) => {
            const image = event.target as HTMLImageElement;
            image.src = fallbackImageUrl;
        };

        return (
            <img
                src={src}
                alt={alt}
                ref={ref}
                loading="lazy"
                onError={handleImageError}
                {...props}
            />
        );
    }
);

export default Image;
