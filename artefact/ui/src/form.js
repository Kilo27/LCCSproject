import { useState } from 'react';
import "./form.css"

function Form(){
	const [email, setEmail] = useState('');
	const [ai_suggested_value, setAi_suggested_value] = useState('');
	const [actual_value, setActual_value] = useState('');
	const [starting_value, setStarting_value] = useState('');
	const [starting_coefficient, setStarting_coefficient] = useState('');
	let accurate=false;
	 
	const submitFeedback = async (event) => {
		event.preventDefault();
		if ((ai_suggested_value >= starting_value && actual_value >= starting_value) || (ai_suggested_value <= starting_value && actual_value <= starting_value)) {
			accurate = true;
		}
		try{
			let response = await fetch('http://localhost:5000/feedbackform', {
				method: 'POST',
				body: JSON.stringify({
					"email": email,
					"startingvalue":starting_value,
					"estimatedcoefficient": starting_coefficient,
					"aisuggestedvalue":ai_suggested_value,
					"actualvalue":actual_value,
					"accurate": accurate,
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
				setStarting_coefficient("");
				setAi_suggested_value("");
				setActual_value("");
			}
		} else {
			console.error('Error submitting feedback:', response.statusText);
		}
		}
		catch (error) {
			setEmail("");
			setStarting_value("");
			setStarting_coefficient("");
			setAi_suggested_value("");
			setActual_value("");
			alert('Error submitting feedback');
		}
	};
	return(
			<form id="userform">
				<label>
					Enter Email <br/>
					<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
				</label>
				<br/>
				<br/>
				<label>
					Enter Starting Value: (Latest Data when prediction was made) <br/>
					<input type="number" value={starting_value}  onChange={(e) => setStarting_value(e.target.value)} />
				</label>
				<br/>
				<br/>
				<label>
					Enter Estimated Coefficient: <br/>
					<input type="number" value={starting_coefficient}  onChange={(e) => setStarting_coefficient(e.target.value)} />
				</label>
				<br/>
				<br/>
				<label>
					Enter AI Suggested Value (One Week) <br/>
					<input type="number" value={ai_suggested_value}  onChange={(e) => setAi_suggested_value(e.target.value)} />
				</label>
				<br/>
				<br/>
				<label>
					Enter Actual Value (One Week) <br/>
					<input type="number" value={actual_value} onChange={(e) => setActual_value(e.target.value)} />
				</label>
				<br/>
				<br/>
				<button type="submit" onClick={submitFeedback}>Submit</button>
			</form>
	);
}
export default Form;