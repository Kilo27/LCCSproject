const mongoose=require('mongoose');
const feedbackSchema= new mongoose.Schema({
	symbol: {
		type: String,
		required: true
	},
	ai_suggested_value: {
		type: Float,
		required: true
	},
	actual_value: {
		type: Float,
		required: true
	},
});
const Feedback=mongoose.model('Feedback',feedbackSchema);
module.exports=Feedback;