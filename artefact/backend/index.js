const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Admin:ABCD1234@feedbackform.bn4do.mongodb.net/?retryWrites=true&w=majority&appName=FeedbackForm', {
    dbName: 'FeedbackForm',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Schema for users of app
const FeedbackSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: false,
    },
	aisuggestedvalue: {
        type: Number,
        required: true,
    },
	actualvalue: {
		type: Number,
		required: true,
	},
    date: {
        type: Date,
        default: Date.now,
    },
});
const Feedback = mongoose.model('Feedback', FeedbackSchema);
Feedback.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {
    resp.send("App is Working");
});

app.post("/feedbackform", async (req, resp) => {
    try {
        const feedback = new Feedback(req.body);
        let result = await feedback.save();
        result = result.toObject();
        if (result) {
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("");
        }

    } catch (e) {
        resp.send("Something Went Wrong\n" + e);
    }
});
app.listen(5000);