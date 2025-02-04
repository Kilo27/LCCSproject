//import logo from './logo.svg';
import Plot from 'react-plotly.js';
import './App.css';
import jsondata from './index.js';

function App() {
  return (
    <body>
    <p>{jsondata}</p>
    <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
        ]}
        layout={ {width: 320, height: 240, title: {text: 'A Fancy Plot'}} }
      />
      </body>
  );
}

export default App;
