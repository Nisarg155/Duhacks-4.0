const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const morgan = require('morgan');
const app = express();
const mailgun = require('mailgun-js')
const port = process.env.PORT || 5000;
dotenv.config();

const studentRouter = require("./routers/studetRouter");
const teacherRouter = require("./routers/teacherRouter");

app.use(cors('*'));
app.use(express.json());
app.use(morgan('dev'));


mongoose.connect(process.env.EDU_MONGO_URI).then(
    (connection) => {
        console.log('MongoDB Connected');
    },
)
    .catch(err => console.log(err))



app.get("/", (req, res) => {

    res.json({
        message: "Hello World!",
    });
})

app.use("/api/student", studentRouter);
app.use("/api/teacher", teacherRouter);
app.listen(port, () => {

    console.log(`Server running on port ${port}`);
});