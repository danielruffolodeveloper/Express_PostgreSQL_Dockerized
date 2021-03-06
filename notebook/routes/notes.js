
var express = require('express');
var router = express.Router();
var db = require('../database');



//Summary of routes
//Get all notes
//Create a note
//Get a single note by id
//Delete a note

router.get("/all", function(req, res) {
    db.Note.findAll()
        .then( notes => {
            res.status(200).send(JSON.stringify(notes));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.get("/:id", function(req, res) {
    db.Note.findByPk(req.params.id)
        .then( note => {
            res.status(200).send(JSON.stringify(note));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.put("/", function(req, res) {
    db.Note.create({
        title: req.body.title,
        content: req.body.content,
        id: req.body.id
        })
        .then( note => {
            res.status(200).send(JSON.stringify(note));
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

router.delete("/:id", function(req, res) {
    db.Note.destroy({
        where: {
            id: req.params.id
        }
        })
        .then( () => {
            res.status(200).send();
        })
        .catch( err => {
            res.status(500).send(JSON.stringify(err));
        });
});

module.exports = router;