import Plot from 'react-plotly.js';
import './App.css';
//import jsondata from './index.js';
import jsondata from './data.json';
const date = jsondata.Date;
const close = jsondata.Stock_Close;
const open = jsondata.Stock_Open;
const high = jsondata.High;
const low = jsondata.Low;
function App() {
return (
	<div className="App">
		<Plot
				data={[
					{
						x: date,
						y: close,
						name: 'close',
						type: 'scatter',
						mode: 'lines+markers',
						marker: {color: 'red'},
					},
					{
						x: date,
						y: open,
						name: 'open',
						type: 'scatter',
						mode: 'lines+markers',
						marker: {color: 'blue'},
					},
					{
						x: date,
						y: high,
						name: 'high',
						type: 'scatter',
						mode: 'lines+markers',
						marker: {color: 'green'},
					},
					{
						x: date,
						y: low,
						name: 'low',
						type: 'scatter',
						mode: 'lines+markers',
						marker: {color: 'yellow'},
					}
				]}
				layout={ {width: 1000, height: 500, title: {text: 'Stock Quotes Over Time'}} }
				paper_bgcolor='#CFB1B7'
				plot_bgcolor='#CFB1B7'
			/>
			<Plot
				data={[
					{
						x: date,
						close: close,
						open: open,
						high: high,
						low: low,
						type: 'candlestick',
						name: 'Stock Data',
						increasing: {line: {color: 'green'}},
						decreasing: {line: {color: 'red'}}
					}
				]}
				layout={ {width: 1000, height: 500, title: {text: 'Stock Quotes Over Time'}} }
				paper_bgcolor='#CFB1B7'
				plot_bgcolor='#CFB1B7'
			/>
	</div>
);
}
export default App;