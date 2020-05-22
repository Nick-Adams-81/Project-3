const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const employees = require('./routes/api/employees');
const punchcodes = require('./routes/api/punchcodes');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

//Connect to Mongo
mongoose
.connect(db)
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err));

// Use Routes
app.use('/api/employees', employees);
app.use('/api/punchcodes', punchcodes);
const port = process.env.PORT || 6000;

app.listen(port, () => console.log(`server started on port ${port}`));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// })