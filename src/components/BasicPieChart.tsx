import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { Types } from "./types";

export const BasicPieChart = (props: IBasicPieChartProps) => {
  const chartRef = useRef<HTMLDivElement>(null);

  const { width, height, top, right, bottom, left } = props;

  useEffect(() => {
    // Remove any existing SVG element before creating a new one
    d3.select(chartRef.current).select('svg').remove();

    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const radius = Math.min(width, height) / 2 - Math.max(top, right, bottom, left);

    d3.dsv(
      ",",
      "https://gist.githubusercontent.com/Thieffen/a684b4e0d9a4dc97974d32bff84c16df/raw/8068fa1bdf1084ff39a509450d85f7138025006c/pie.csv",
      (d) => {
        const res = (d as unknown) as Types.Data;
        return {
          name: res.name,
          value: res.value
        };
      }
    ).then((data) => {
      console.log("data loaded!", data);

      const color = d3
        .scaleOrdinal()
        .domain((d3.extent(data, (d) => d.name) as unknown) as string)
        .range(d3.schemeCategory10);

      const pie = d3
        .pie<Types.Data>()
        .sort(null)
        .value((record) => record.value);

      const path = d3.arc().innerRadius(100).outerRadius(radius);

      const pieData = pie(data);
      console.log(pieData);

      const arch = svg
        .selectAll(".arc")
        .data(pieData)
        .enter()
        .append("g")
        .attr("class", "arc")
        .attr("fill", (d) => color(d.data.name) as string);

      arch.append("path").attr("d", (d) => path(d as unknown as d3.DefaultArcObject) as string);
    });
  }, [width, height, top, right, bottom, left]);

  return <div ref={chartRef} className="basicPieChart" />;
};

interface IBasicPieChartProps {
  width: number;
  height: number;
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export default BasicPieChart;

