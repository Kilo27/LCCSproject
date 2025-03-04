const express=require(express);
const router = express.Router();
const Feedback = require('../models/feedback');

//post feedback to database from ../src/form.js
router.post('/',(req,res)=>{
	const feedback = new Feedback({
		symbol: req.body.symbol,
		ai_suggested_value: req.body.ai_suggested_value,
		actual_value: req.body.actual_value
	});
	feedback.save()
	.then(data=>{
		res.json(data);
	})
	.catch(err=>{
		res.json({message: err});
	});
});