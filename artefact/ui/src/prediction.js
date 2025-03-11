import jsondata from './data.json';
import "./prediction.css"

const meanreg=jsondata.Mean_Regression;
const estimate=jsondata.Final_Value
var statement = "";
if (meanreg <= -3.0) {
	statement = "Stock Falling Extremely Quickly, Professional Advice Recommended";
} else if (meanreg > -3.0 && meanreg <= -1.5) {
	statement = "Stock Falling Extremely Quickly. Professional Advice Recommended";
}else if (meanreg > -1.5 && meanreg <= -1) {
	statement = "Significant Decrease Expected";
} else if (meanreg > -1 && meanreg <= -0.25) {
	statement = "Moderate Decrease Expected";
} else if (meanreg > -0.25 && meanreg <= 0.25) {
	statement = "Minimal Change Expected";
} else if (meanreg > 0.25 && meanreg <=1) {
	statement = "Moderate Increase Expected";
} else if (meanreg > 1 && meanreg <= 1.5) {
	statement = "Significant Increase Expected";
} else if (meanreg > 1.5 && meanreg <= 3.0) {
	statement = "Stock Rising Extremely Quickly, Proceed With Caution";
} else if (meanreg > 2.0) {
	statement = "Stock Rising Extremely Quickly. Professional Advice Recommended";
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