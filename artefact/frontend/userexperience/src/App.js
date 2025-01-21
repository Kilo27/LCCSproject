import './App.css';
import LinePlot from "./chartcreater.jsx"

//const stock = FileAttachment("aapl.csv").csv({typed: true})
const stock = [1,2,3,4,5,6,7,8,9,10];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stock Price Chart</h1>
        <div id="chart">
          {LinePlot(stock)}
        </div>
      </header>
    </div>
  );
}

export default App;
