const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require("../models/user");

router.post("/", (req, res, next) => {
    const user = new User({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        company: req.body.company
    });
    user
    .save()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });

    res.status(201).json({
        message: 'POST request to /users',
        createdUser: user
    });
});

router.get("/:userId", (req, res, next) => {
    const id = req.params.userId;
    User.findById(id)
    .exec()
    .then(result => {
        console.log(result);
        if (result){
            res.status(200).json(result);
        } else {
            res.status(404).json({message: 'No valid entry found for Id:' + id})
        }
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: err});
    });
});

router.get("/", (req, res, next) => {
    User.find()
    .exec()
    .then(results => {
        console.log("GET result: " + results.length);
        res.status(200).json(results);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});    

router.delete("/:userId", (req, res, next) => {
    const id = req.params.userId;
    User.remove({ _id: id})
    .exec()
    .then(result => {
        res.status(200).json(result);
    })
    .catch (err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
});

router.patch("/:userId", (req, res, next)  => {
    const id = req.params.userId;
    const updateOps = {};
    for (const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }
    User.update({ _id: id}, { $set: updateOps})
    .exec()
    .then(result => {
        console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
});

module.exports = router;