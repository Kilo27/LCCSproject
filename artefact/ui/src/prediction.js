import jsondata from './data.json';
import "./prediction.css"

const meanreg=jsondata.Mean_Regression;
const estimate=jsondata.Final_Value
var statement = "";
if (meanreg <= -10.0) {
    statement = "Stock Falling Extremely Quickly, Professional Advice Recommended";
} else if (meanreg > -10.0 && meanreg <= -5.0) {
    statement = "Stock Falling Very Quickly, Highly Volatile";
} else if (meanreg > -5.0 && meanreg <= -3.0) {
    statement = "Stock Falling Quickly, Volatile";
} else if (meanreg > -3.0 && meanreg <= -1.5) {
    statement = "Significant Decrease Expected";
} else if (meanreg > -1.5 && meanreg <= -1.0) {
    statement = "Moderate Decrease Expected";
} else if (meanreg > -1.0 && meanreg <= -0.25) {
    statement = "Slight Decrease Expected";
} else if (meanreg > -0.25 && meanreg <= 0.25) {
    statement = "Minimal Change Expected";
} else if (meanreg > 0.25 && meanreg <= 1.0) {
    statement = "Slight Increase Expected";
} else if (meanreg > 1.0 && meanreg <= 1.5) {
    statement = "Moderate Increase Expected";
} else if (meanreg > 1.5 && meanreg <= 3.0) {
    statement = "Significant Increase Expected";
} else if (meanreg > 3.0 && meanreg <= 5.0) {
    statement = "Stock Rising Quickly, Volatile";
} else if (meanreg > 5.0 && meanreg <= 10.0) {
    statement = "Stock Rising Very Quickly, Highly Volatile";
} else if (meanreg > 10.0) {
    statement = "Stock Rising Extremely Quickly, Professional Advice Recommended";
} else {
    statement = "Error";
}

function Prediction() {
	return (
		<div id="prediction-container">
			<h1>The mean regression coefficient is: {meanreg}</h1>
			<br/>
			<h1>{statement}</h1>
			<br/>
			<h1>Our estimated value for this stock a week from now, is:  ${estimate}</h1>
		</div>
	);
}
export default Prediction;