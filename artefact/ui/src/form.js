import React, { useState } from 'react';

const Form = () => {
	const [formData, setFormData] = useState({ name: '', email: '' });

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Replace this with a call to a server endpoint
		fetch('/api/saveFormData', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(formData),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Data saved successfully', data);
			})
					.catch((error) => {
						console.error('Error saving data', error);
					});
			};

	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Name:</label>
				<input type="text" name="name" value={formData.name} onChange={handleChange} />
			</div>
			<div>
				<label>Email:</label>
				<input type="email" name="email" value={formData.email} onChange={handleChange} />
			</div>
			<button type="submit">Submit</button>
		</form>
		);
	};
export default Form;