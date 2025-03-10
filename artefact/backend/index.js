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
	startingvalue: {
		type: Number,
		required: true,
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
	accurate: {
		type: Boolean,
		required: true,
	}
});
const Feedback = mongoose.model('Feedback', FeedbackSchema);
Feedback.createIndexes();

// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
app.listen(5000, () => {
    console.log("App listening at port 5000");
});
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

app.get("/accuracyreport", async (req, resp) => {
	try {
		const trueCount = await Feedback.countDocuments({ accurate: true });
		const falseCount = await Feedback.countDocuments({ accurate: false });
		resp.send({ trueCount, falseCount });
		console.log("Accuracy Report:", trueCount, falseCount);
	} catch (e) {
		resp.send("Something Went Wrong\n" + e);
	}
});


//app.listen(5000);