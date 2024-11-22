import { FC } from "react";
import Box from "../box/box";
import Image from "../image/image";
import sadFace from "@/assets/static/sad-face.png";
import { ErrorBoxProps } from "./errorBox.types";

const ErrorBox: FC<ErrorBoxProps> = ({
    text = "Oops, seems there was an error while fetching this, but that's out fault, don't worry",
}) => {
    return (
        <Box className="p-6 flex-center-col text-center">
            <Image alt="sad-face" src={sadFace} className="h-14" />
            <p>{text}</p>
        </Box>
    );
};

export default ErrorBox;
