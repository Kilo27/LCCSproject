import { useState } from 'react';

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
		fetch('http://localhost:3000/api/feedbacki', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(feedback)
		})
		.then(response => response.json())
		.then(data => {
			console.log('Success:', data);
		})
		.catch((error) => {
			console.error('Error:', error);
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
					<input type="number" value={ai_suggested_value}  onChange={(e) => setAi_suggested_value(e.target.value)} />
				</label>
				<label>
					Enter Actual Value (One Week)
					<input type="number" value={actual_value} onChange={(e) => setActual_value(e.target.value)} />
					</label>
				<input type="submit" value="Submit" />
			</form>
	);
}
export default Form;