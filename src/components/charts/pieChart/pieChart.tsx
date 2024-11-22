import { useRef, useEffect, FC, memo } from "react";
import { select, arc, pie, Arc, PieArcDatum } from "d3";
import { PieChartDatum, PieChartProps } from "./pieChart.types";
import { PieChartWrapper } from "./pieChart.styled";
import BigNumber from "bignumber.js";

const PieChart: FC<PieChartProps> = memo(
    ({
        data,
        width,
        height,
        colors = [
            "#FFB3BA",
            "#FFDFBA",
            "#FFFFBA",
            "#BAFFC9",
            "#BAE1FF",
            "#E4C1F9",
        ],
        suffix = "%",
        fontSize = "14px",
        fontColor = "#000",
        donut = false,
        gap = true,
        sectionClick,
    }) => {
        const ref = useRef<SVGSVGElement>(null);

        useEffect(() => {
            if (!ref.current) return;

            const radius = Math.min(width, height) / 2;

            const pies = pie<PieChartDatum>().value((d) => d.value);

            const arC: Arc<unknown, PieArcDatum<PieChartDatum>> = arc<
                unknown,
                PieArcDatum<PieChartDatum>
            >()
                .innerRadius(donut ? radius - 45 : 0)
                .outerRadius(radius)
                .padAngle(donut && gap ? 0.05 : 0);

            const svg = select(ref.current)
                .attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", `translate(${width / 2}, ${height / 2})`);

            const arcs = svg
                .selectAll("arc")
                .data(pies(data))
                .enter()
                .append("g")
                .attr("class", "arc");

            arcs.append("path")
                .attr("d", arC)
                .attr("fill", (_, i) => colors[i])
                .on(
                    "click",
                    (event, d) => sectionClick && sectionClick(event, d)
                )
                .transition()
                .duration(750)
                .attrTween("d", function (d) {
                    const interpolate = (t: number) =>
                        arC({
                            ...d,
                            endAngle:
                                d.startAngle + (d.endAngle - d.startAngle) * t,
                        });
                    return (t) => interpolate(t) as string;
                });

            arcs.append("text")
                .attr("transform", (d) => `translate(${arC.centroid(d)})`)
                .attr("opacity", "0")
                .attr("text-anchor", "middle")
                .text(
                    (d) => `${new BigNumber(d.data.value).toFixed(2)}${suffix}`
                )
                .style("fill", fontColor)
                .style("font-size", fontSize)
                .transition()
                .duration(1050)
                .attr("opacity", "1");

            return () => {
                svg.selectAll("*").remove();
            };
        }, [
            data,
            width,
            height,
            colors,
            suffix,
            fontSize,
            fontColor,
            donut,
            gap,
            sectionClick,
        ]);

        return (
            <PieChartWrapper
                $isClickable={Boolean(sectionClick)}
                $isDonut={donut}
            >
                <svg ref={ref} />
            </PieChartWrapper>
        );
    }
);

export default PieChart;
