const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const session = require('express-session')
const passport = require('./services/passport')


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'super secret',
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 7 * 24 * 60 * 60 * 1000
    }
}))
app.use(passport.initialize({}))
app.use(passport.session({}))
app.use('/auth', authRouter);
app.use((req, res, next) => {
    if(req.user) {
        next()
    } else {
        next('Not authorized!')
    }
})
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(3000)

module.exports = app;
