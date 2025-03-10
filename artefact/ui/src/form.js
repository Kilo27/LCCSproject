import { useState } from 'react';
import "./form.css"

function Form(){
	const [email, setEmail] = useState('');
	const [ai_suggested_value, setAi_suggested_value] = useState('');
	const [actual_value, setActual_value] = useState('');
	const [starting_value, setStarting_value] = useState('');
	let accurate=false;
	 
	const submitFeedback = async (event) => {
		event.preventDefault();
		if (ai_suggested_value > starting_value && actual_value > starting_value) {
			accurate = true;
		}
		let response = await fetch('http://localhost:5000/feedbackform', {
			method: 'POST',
			body: JSON.stringify({
				"email": email,
				"startingvalue":starting_value,
				"aisuggestedvalue":ai_suggested_value,
				"actualvalue":actual_value,
				"accurate": accurate
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (response.ok) {
			let result = await response.json();
			console.warn(result);
			if (result){
				alert('Feedback Submitted');
				setEmail("");
				setStarting_value("");
				setAi_suggested_value("");
				setActual_value("");
			}
		} else {
			console.error('Error submitting feedback:', response.statusText);
		}
	};
	return(
			<form id="userform">
				<label>
					Enter Email
					<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
				</label>
				<br/>
				<label>
					Enter Starting Value
					<input type="number" value={starting_value}  onChange={(e) => setStarting_value(e.target.value)} />
				</label>
				<br/>
				<label>
					Enter AI Suggested Value (One Week)
					<input type="number" value={ai_suggested_value}  onChange={(e) => setAi_suggested_value(e.target.value)} />
				</label>
				<br/>
				<label>
					Enter Actual Value (One Week)
					<input type="number" value={actual_value} onChange={(e) => setActual_value(e.target.value)} />
				</label>
				<br/>
				<button type="submit" onClick={submitFeedback}>Submit</button>
			</form>
	);
}
export default Form;