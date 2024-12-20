import { useEffect } from "react";
import * as d3 from "d3";
import { PieArcDatum } from "d3-shape";
import { Types } from "./types";

export const BasicPieChart = (props: IBasicPieChartProps) => {
  useEffect(() => {
    draw();
  });

  const draw = () => {
    const innerWidth = props.width - props.left - props.right;
    const innerHeight = props.height - props.top - props.bottom;
    const radius = Math.min(innerWidth, innerHeight) / 2;

    const svg = d3
      .select(".basicPieChart")
      .append("svg")
      .attr("width", innerWidth)
      .attr("height", innerHeight)
      .append("g")
      .attr("transform", `translate(${innerWidth / 2} ${innerHeight / 2})`);

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

      // generate the arch SVGs for each pie data
      // use the color for each name
      const arch = svg
        .selectAll(".arc")
        .data(pieData)
        .enter()
        .append("g")
        .attr("class", "arc")
        .attr("fill", (d) => color(d.data.name) as string);

      arch.append("path").attr("d", path);
    });
  };

  return <div className="basicPieChart" />;
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

