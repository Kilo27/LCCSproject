const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.post('/api/saveformdata', (req, res) => {
	const formData = req.body;
	// Process the form data here
	console.log('Form Data Received:', formData);
	
	// Send a response back to the client
	res.status(200).send('Form data saved successfully');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
