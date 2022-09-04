const passport = require('passport')
const LocalStrategy = require('passport-local');
const db = require('../models')

passport.serializeUser((user, done) => {
    done(null, user);
})

passport.deserializeUser((user, done) => {
    done(null, user);
})

passport.use('local', new LocalStrategy(
    async (username, password, done) => {
        try {
            const userData = await db.Users.findOne({where : { username: username}}, {password : 1});
            const passwordData = await db.Users.findOne({where : {password:password}})
            if(!userData) {
                return done(null, false);
            }
            if(!passwordData) {
                return done(null, false);
            }
            return done(null, userData.username, passwordData.password);
        } catch (err) {
            return err;
        }
    }
));

module.exports = passport;
