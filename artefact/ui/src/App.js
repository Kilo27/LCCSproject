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
            }
          ]}
          layout={ {width: 1000, height: 500, title: {text: 'Stock Close Over Time'}} }
        />
    </div>
  );
}

export default App;
