// const express = require("express");
// const mongoose = require("mongoose");

// const app = express();

// const PORT = process.env.PORT || 3001;

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// mongoose.connect
//   (process.env.MONGODB_URI || "mongodb://localhost/timeClock", {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//     useCreateIndex: true
//   })
//   .then(() => console.log('Mongoose has sucessfully connected to MongoDB!'))
//   .catch((err) => console.log('There was an issue connecting to Mongo'));

// //app.use(require("./routes/static.js"));
// app.use(require("./routes/app.js"));

// app.listen(PORT, function () {
//   console.log(`Server is running on port ${PORT}!`);
// });

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const clockins = require('./routes/api/clockins');
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
app.use('/api/clockins', clockins);
app.use('/api/employees', employees);
app.use('/api/punchcodes', punchcodes);
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`server started on port ${port}`));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// })