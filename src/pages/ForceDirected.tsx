
import ForceDirectedChart from '../components/ForceDirectedChart';

function ForceDirected() {

  return (
	<>
	  <h1>D3.js Force Directed</h1>
	  <div>
		<ForceDirectedChart
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

export default ForceDirected;