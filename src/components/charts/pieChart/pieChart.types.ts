import { Size } from "@/types/size";
import { PieArcDatum } from "d3";
import { MouseEvent } from "react";

export interface PieChartDatum {
    value: number;
    label?: string;
}

export interface PieChartProps {
    data: PieChartDatum[];
    width: number;
    height: number;
    colors?: string[];
    sectionClick?: (
        event: MouseEvent<SVGPathElement, MouseEvent>,
        data: PieArcDatum<PieChartDatum>
    ) => void;
    suffix?: string;
    fontSize?: Size;
    fontColor?: string;
    donut?: boolean;
    gap?: boolean;
}
