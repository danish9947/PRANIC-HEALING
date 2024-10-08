const express = require('express');
const app = express();
var cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const authRouter = require('./router/authentication.routes');

const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
// console.log(dotenv);

const userRoute = require('./router/user.routes');
const authenticationRoute = require('./router/authentication.routes');
const uplode = require('./router/imageUplode.routes');
const caseformRouter = require('./router/patient.routes');
const stripeRouter = require('./router/stripe.routes')
const chatRouter = require('./router/chatApp.routes')
const authRoutes = require('./router/authentication.routes');
// Created router file import


// console.log("Mongo URL: ", process.env.MONGO_URL);
app.use(session({
    secret: 'your-session-secret',
    resave: false,
    saveUninitialized: true,
}));

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());


app.use(express.json());
app.use(cors());


app.use('/api', authRoutes);
app.use('/api/auth', authRouter);
app.use("/api/users", userRoute);
app.use("/api/auth", authenticationRoute);
app.use("/api/image", uplode);
app.use('/api/case', caseformRouter);
app.use('/api/stripe', stripeRouter)
app.use('/api/chat', chatRouter)


// console.log(userRoute);
console.log(authenticationRoute);
console.log(uplode);



mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("MONGO DB CONNECTED 😒😒😒"))
    .catch((err) => {
        console.log(err);
    })

// console.log(process.env.PORT || 3333);
app.listen(process.env.PORT || 3333, () => {
    console.log("BACK END SERVER IS RUNNING  ❤️ ❤️ ❤️");
})