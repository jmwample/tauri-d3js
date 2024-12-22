import { useEffect, useRef } from "react";
import * as d3 from "d3";

interface CustomNodeDatum extends d3.SimulationNodeDatum {
  r: number;
  group: number;
}

export const ForceDirectedChart = (props: IBasicPieChartProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const { width, height } = props;

    const nodes: CustomNodeDatum[] = d3.range(200).map(() => ({
      r: Math.random() * 12 + 4,
      group: Math.floor(Math.random() * 10),
    }));

    const simulation = d3.forceSimulation(nodes)
      .force("charge", d3.forceManyBody().strength(-30))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(d => d.r + 1))
      .on("tick", () => {
        context.clearRect(0, 0, width, height);
        nodes.forEach(d => {
          context.beginPath();
          context.arc(d.x!, d.y!, d.r, 0, 2 * Math.PI);
          context.fillStyle = d3.schemeCategory10[d.group % 10];
          context.fill();
        });
      });

    return () => {
      simulation.stop();
    };
  }, [props]);

  return <canvas ref={canvasRef} width={props.width} height={props.height} />;
};



interface IBasicPieChartProps {
  width: number;
  height: number;
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export default ForceDirectedChart;
