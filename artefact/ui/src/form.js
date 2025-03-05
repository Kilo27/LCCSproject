import { useState } from 'react';

function Form(){
	const [email, setEmail] = useState('');
	const [ai_suggested_value, setAi_suggested_value] = useState('');
	const [actual_value, setActual_value] = useState('');
	 
	const submitFeedback = async (event) => {
		event.preventDefault();
		let result = await fetch('http://localhost:5000/feedbackform', {
			method: 'POST',
			body: JSON.stringify({email, ai_suggested_value, actual_value}),
			headers: {
				'Content-Type': 'application/json'
			},
		})
		result= await result.json();
		console.warn(result);
		if (result){
			alert('Feedback Submitted');
			setEmail("");
			setAi_suggested_value("");
			setActual_value("");
		}
	};
	return(
			<form>
				<label>
					Enter Email
					<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
				</label>
				<label>
					Enter AI Suggested Value (One Week)
					<input type="number" value={ai_suggested_value}  onChange={(e) => setAi_suggested_value(e.target.value)} />
				</label>
				<label>
					Enter Actual Value (One Week)
					<input type="number" value={actual_value} onChange={(e) => setActual_value(e.target.value)} />
					</label>
				<button type="submit" onClick={submitFeedback}>Submit</button>
			</form>
	);
}
export default Form;