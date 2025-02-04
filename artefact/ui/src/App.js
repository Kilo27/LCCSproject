import Plot from 'react-plotly.js';
import './App.css';
import jsondata from './index.js';
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
              x: [
                "01/02",
                "01/03",
                "01/06",
                "01/07",
                "01/08",
                "01/10",
                "01/13",
                "01/14",
                "01/15",
                "01/16",
                "01/17",
                "01/21",
                "01/22",
                "01/23",
                "01/24",
                "01/27",
                "01/28",
                "01/29"
              ],
              y: [
                243.85,
                243.36,
                245.0,
                242.21,
                242.7,
                236.85,
                234.4,
                233.28,
                237.87,
                228.26,
                229.98,
                222.64,
                223.83,
                223.66,
                222.78,
                229.86,
                238.26,
                239.36
            ],
              name: 'close',
              type: 'scatter',
              mode: 'lines+markers',
              marker: {color: 'red'},
            },
            {
              x: [
              "01/02",
              "01/03",
              "01/06",
              "01/07",
              "01/08",
              "01/10",
              "01/13",
              "01/14",
              "01/15",
              "01/16",
              "01/17",
              "01/21",
              "01/22",
              "01/23",
              "01/24",
              "01/27",
              "01/28",
              "01/29"
              ],
              y: [
                248.93,
                243.36,
                244.31,
                242.98,
                241.92,
                240.01,
                233.53,
                234.75,
                234.635,
                237.35,
                232.115,
                224.0,
                219.79,
                224.74,
                224.78,
                224.02,
                230.85,
                234.12
            ],
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
