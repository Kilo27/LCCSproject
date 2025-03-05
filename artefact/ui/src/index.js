import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Form from './form';
import App from './App';
import reportWebVitals from './reportWebVitals';

const uri = "mongodb+srv://kyleoseoighe:<db_password>@feedbackform.bn4do.mongodb.net/?retryWrites=true&w=majority&appName=FeedbackForm";
const client = new MongoClient(uri,  {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	}
});

async function run() {
	try {
		await client.connect();
		await client.db("admin").command({ ping: 1 });
		console.log("Connected successfully to server");
	} finally {
		await client.close();
	}
}

//const jsondata = oldjsondata;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
	<Form/>
  </React.StrictMode>
);

run().catch(console.dir);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log());
//export default jsondata;
