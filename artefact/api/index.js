const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/feedback', (req, res) => {
	const data = req.body;

	fs.writeFile('feedback.json', JSON.stringify(data, null, 2), (err) => {
		if (err) {
			console.error('Error writing to file', err);
			res.status(500).send('Internal Server Error');
		} else {
			res.status(200).send('Data saved successfully');
		}
	});
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});