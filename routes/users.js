const express = require('express');
const db = require('../models');
const router = express.Router();


router.route('/')
    /* GET users */
    .get((req, res) => {
        db.Users.findAll().then((data) => res.json(data))
    })
    /* CREATE user */
    .post((req, res) => {
        db.Users.create(req.body)
            .then((data) => res.json(data))
    })

router.route('/:id')
    /* GET user */
    .get((req, res) => {
        db.Users.findOne({where: {id: req.params.id}})
            .then((data) => res.json(data));
    })
    /* UPDATE user */
    .post((req, res) => {
        db.Users.create(req.body, { where: {id: req.params.id}})
            .then((data) => res.json(data))
    })
    /* DELETE user */
    .delete((req, res) => {
        db.Users.destroy({ where: {id: req.params.id} })
            .then((data) => res.json(data))
    })

module.exports = router;
