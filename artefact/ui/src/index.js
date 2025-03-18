import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Form from './form';
import App from './App';
import Pichart from './accuracyreport';
import Prediction from "./prediction";
import Data from "./data";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
	<div id="data" class="container">
		<Data/>
	</div>
	<div id="graphs" class="container">
		<App/>
	</div>
	<div id="prediction" class="container">
		<Prediction/>
	</div>
	<div id="accuracy" class="container">
		<div id="form"class="container">
			<Form/>
		</div>
		<div id="pichart" class="container">
		<Pichart/>
		</div>
	</div>
  </React.StrictMode>
);