const mongoose = require('mongoose');
const {spawn} = require('child_process');
mongoose.connect('mongodb+srv://Admin:ABCD1234@feedbackform.bn4do.mongodb.net/?retryWrites=true&w=majority&appName=FeedbackForm', {
    dbName: 'FeedbackForm',
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var connectno=0
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
	estimatedcoefficient: {
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
		console.log("Connect Number:", connectno, " Accuracy Report:", trueCount, falseCount);
		connectno++;
	} catch (e) {
		resp.send("Something Went Wrong\n" + e);
	}
});

function runScript(userinput) {
	return spawn('python', [
		"-u",
		"./main.py", userinput
	]);
}
app.post("/getdata", (req, resp) => {
	const userinput = req.body.userinput;
	console.log(userinput);
	const pythonProcess = runScript(userinput);

	pythonProcess.stdout.on('data', (data) => {
		console.log(`stdout: ${data}`);
	});

	pythonProcess.stderr.on('data', (data) => {
		console.error(`stderr: ${data}`);
	});

	pythonProcess.on('close', (code) => {
		console.log(`child process exited with code ${code}`);
		resp.send(`Python script finished with code ${code}`);
	});
});