import { useState } from 'react';

function Data(){
	const [inputValue, setInputValue] = useState('');

		const handleInputChange = (e) => {
			setInputValue(e.target.value);
		};

		const handleSubmit = async () => {
			try {
				const response = await fetch(`http://localhost:5000/getdata`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ userinput: inputValue }),
				});
				const data = await response.json();
				console.log(data);
			}catch(e){
				console.log(e);
			}
		};
	return (
		<div>
			<input
				type="text"
				value={inputValue}
				onChange={handleInputChange}
				placeholder="Enter data"
			/>
			<button onClick={handleSubmit}>Submit</button>
		</div>
);
}
export default Data;
