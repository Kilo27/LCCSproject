import Plot from 'react-plotly.js';

async function fetchAccuracyReport() {
	try {
		const response = await fetch('http://localhost:5000/accuracyreport');
		const data = await response.json();
		const trueValue = data.trueCount;
		const falseValue = data.falseCount;
		const truevar = trueValue;
		const falsevar = falseValue;
		console.log('Accuracy Report:', truevar, falsevar);
		return [truevar, falsevar];
	} catch (error) {
		console.error('Error fetching accuracy report:', error);
	}
}
fetchAccuracyReport();
function Pichart(){
	return (
		<Plot
			data={[
				{
					values: [fetchAccuracyReport()[0], fetchAccuracyReport()[1]],
					labels: ['True', 'False'],
					type: 'pie'
				}
			]}
			layout={ {width: 1000, height: 1000, title: {text: 'Accuracy Report'}} }
			paper_bgcolor='#CFB1B7'
			plot_bgcolor='#CFB1B7'
		/>
	);
}
export default Pichart;