const express = require('express');
const passport = require('../services/passport')

const router = express.Router();

/* GET index. */
router.route('/login')
    .get((req, res) =>{
        res.render('login')
    })
    .post(passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login'}))

module.exports = router;
