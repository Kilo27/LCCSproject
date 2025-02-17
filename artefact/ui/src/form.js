import React, { useState } from 'react';

const Form = () => {
	const [formData, setFormData] = useState({ tickercode: '', actualPrice: 0.0, rangeProvided: 0.0 });
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted', formData);
		// Replace this with a call to a server endpoint
		fetch('/api/saveFormData', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
		};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Tickercode:</label>
				<input type="text" name="tickercode" value={formData.tickercode} onChange={handleChange} />
			</div>
			<div>
				<label>Actual Price:</label>
				<input type="number" name="actualPrice" value={formData.actualPrice} onChange={handleChange} />
			</div>
			<div>
				<label>Range Provided:</label>
				<input type="number" name="rangeProvided" value={formData.rangeProvided} onChange={handleChange} />
			</div>
			<button type="submit">Submit</button>
		</form>
	);
	};
export default Form;