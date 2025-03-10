import Plot from 'react-plotly.js';

function Pichart(){
	async function fetchAccuracyReport() {
		try {
			const response =  fetch('http://localhost:5000/accuracyreport');
			const data =  response.json();
			const trueValue = data.trueCount;
			const falseValue = data.falseCount;
			console.log('Accuracy Report:', trueValue, falseValue);
		} catch (error) {
			console.error('Error fetching accuracy report:', error);
		}
	}
	return (
		<div>
		<Plot
			data={[
				{
					values: fetchAccuracyReport(),
					labels: ['True', 'False'],
					type: 'pie'
				}
			]}
			layout={ {width: 500, height: 500, title: {text: 'Accuracy Report'}} }
			paper_bgcolor='#CFB1B7'
			plot_bgcolor='#CFB1B7'
		/>
		<button onClick={fetchAccuracyReport}>Refresh</button>
		</div>
	);
}
export default Pichart;