import { FC, useEffect, useRef } from "react";
import * as d3 from "d3";
import { Data } from "./lineChart.types";

type LineChartProps = {
    data: Data[];
    height?: number;
    width?: number;
    marginTop?: number;
    marginRight?: number;
    marginBottom?: number;
    marginLeft?: number;
};

const LineChart: FC<LineChartProps> = ({
    data,
    height = 170,
    width = 328,
    marginBottom = 30,
    marginLeft = 40,
    marginRight = 10,
    marginTop = 20,
}) => {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        if (!svgRef.current) return;

        const svg = d3.select(svgRef.current);

        const xDomain = d3.extent(data, (d) => new Date(d.date)) as [
            Date,
            Date
        ];

        const x = d3.scaleUtc(xDomain ?? [new Date(), new Date()], [
            marginLeft,
            width - marginRight,
        ]);

        const yDomain = d3.max(data, (d) => d.close);

        const y = d3.scaleLinear(
            [0, yDomain ?? 0],
            [height - marginBottom, marginTop]
        );

        const line = d3
            .line<Data>()
            .x((d) => x(new Date(d.date)))
            .y((d) => y(d.close));

        svg.attr("width", width)
            .attr("height", height)
            .attr("viewBox", [0, 0, width, height])
            .attr("style", "max-width: 100%; height: auto; height: intrinsic;");

        svg.append("g")
            .attr("transform", `translate(0,${height - marginBottom})`)
            .call(
                d3
                    .axisBottom(x)
                    .ticks(width / 80)
                    .tickSizeOuter(0)
            );

        svg.append("g")
            .attr("transform", `translate(${marginLeft},0)`)
            .call(d3.axisLeft(y).ticks(height / 40))
            .call((g) => g.select(".domain").remove())
            .call((g) =>
                g
                    .selectAll(".tick line")
                    .clone()
                    .attr("x2", width - marginLeft - marginRight)
                    .attr("stroke-opacity", 0.1)
            );

        const path = svg
            .append("path")
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", line(data));

        const totalLength = path.node()?.getTotalLength() || 0;

        path.attr("stroke-dasharray", totalLength)
            .attr("stroke-dashoffset", totalLength)
            .transition()
            .duration(1000)
            .ease(d3.easeLinear)
            .attr("stroke-dashoffset", 0);

        return () => {
            svg.selectAll("*").remove();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, height, width]);

    return <svg ref={svgRef} />;
};

export default LineChart;
