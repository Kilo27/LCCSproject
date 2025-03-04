import { useState } from 'react';
import fs from 'fs';

function Form(){
	const [symbol, setSymbol] = useState('');
	const [ai_suggested_value, setAi_suggested_value] = useState('');
	const [actual_value, setActual_value] = useState('');
	 
	const submitFeedback = event => {
		event.preventDefault();
		const feedback = {
			symbol: symbol,
			ai_suggested_value: ai_suggested_value,
			actual_value: actual_value
		};
		fs.writeFile('feedback.json', JSON.stringify(feedback, null, 2), (err) => {
			if (err) {
				console.error('Error writing to file', err);
			}
		});
	};
	return(
			<form onSubmit= {submitFeedback}>
				<label>
					Enter Symbol
					<input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
				</label>
				<label>
					Enter AI Suggested Value (One Week)
					<input type="float" value={ai_suggested_value}  onChange={(e) => setAi_suggested_value(e.target.value)} />
				</label>
				<label>
					Enter Actual Value (One Week)
					<input type="integer" value={actual_value} onChange={(e) => setActual_value(e.target.value)} />
					</label>
				<input type="submit" value="Submit" />
			</form>
	);
}
export default Form;