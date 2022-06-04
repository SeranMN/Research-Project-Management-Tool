const router = require("express").Router();
const { Router, json } = require("express");
let Premark = require("../Model/presentSchema");

//Add Marks

router.route("/create").post((req,res) => {

    const groupID = Number(req.body.groupID);
    const Marks = Number(req.body.Marks);
    const Comments = req.body.Comments;

    const newPremark = new Premark({

        groupID,
        Marks,
        Comments

    })

    newPremark.save().then(() => {

        res.json("Mark Added")
    }).catch((err) => {
        console.log(err);
    })
})

module.exports = router; 