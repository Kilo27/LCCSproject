import Plot from 'react-plotly.js';
import { useState, useEffect } from 'react';

function Pichart(){
	const [data, setData] = useState({ trueCount: 0, falseCount: 0 });

	async function fetchAccuracyReport() {
		try {
			const response = await fetch('http://localhost:5000/accuracyreport');
			const data = await response.json();
			const trueValue = data.trueCount;
			const falseValue = data.falseCount;
			setData({ trueCount: trueValue, falseCount: falseValue });
		} catch (error) {
			console.error('Error fetching accuracy report:', error);
			alert("Server Not Connected")
		}
	}

	useEffect(() => {
		fetchAccuracyReport();
	}, []);

	return (
		<div>
		<Plot
			data={[
				{
					values: [data.trueCount, data.falseCount],
					labels: ['True', 'False'],
					type: 'pie'
				}
			]}
			layout={ {width: 500, height: 500, title: {text: 'Accuracy Report'}} }
			/*ultimateColors={[
				"#00a8ba",
				"#ba1200"
			]}*/
			paper_bgcolor='#FFFFFF'
			plot_bgcolor='#FFFFFF'
		/>
		<button onClick={fetchAccuracyReport}>Refresh</button>
		</div>
	);
}
export default Pichart;