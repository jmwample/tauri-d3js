import BasicPieChart from '../components/BasicPieChart';

function PieChart() {
  return (
    <>
      <h1>D3.js Pie Chart</h1>
      <div>
        <BasicPieChart
          height={400}
          width={400}
          top={10}
          bottom={10}
          left={10}
          right={10}
        />
      </div>
    </>
  )
}

export default PieChart;