import Plot from 'react-plotly.js';
import './App.css';
import jsondata from './index.js';
const date = jsondata.date;
const close = jsondata.close;
//const open = jsondata.open;
//const high = jsondata.high;
//const low = jsondata.low;
function App() {
  return (
    <div className="App">
      <Plot
          data={[
            {
              x: date,
              y: close,
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            },
          ]}
          layout={ {width: 320, height: 240, title: {text: 'A Fancy Plot'}} }
        />
    </div>
  );
}

export default App;
