const express = require('express');
const db = require('../models');
const router = express.Router();

/* GET users */
router.get('/', (req, res) => {
    return db.Users.findAll().then((data) => res.json(data))
});

/* GET user */
router.get('/:id', (req, res) => {
    return db.Users.findOne(
        {
            where: {id: req.params.id}
        }).then((data) => res.json(data));
})

/* CREATE user */
router.post('/', (req, res) => {
    return db.Users.create(req.body)
        .then((data) => res.json(data))
})

/* UPDATE user */
router.post('/:id/update', (req, res) => {
    return db.Users.create(req.body,
        {
            where: {id: req.params.id}
        }).then((data) => res.json(data))
})

/* DELETE user */
router.delete('/:id', (req, res) => {
    return db.Users.destroy(
        {
            where:
                {id: req.params.id}
        }).then((data) => res.json(data))
})

module.exports = router;
