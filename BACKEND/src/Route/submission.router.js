const express = require('express');
const router = express.Router();
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");
const Submission = require("../Model/submissions")

router.post("/create", upload.single("file"), async (req, res) => {
    let ItNo = "IT2017"
    let folder = "final report"
    console.log(req.file.originalname, "filepath")
    try {
        // Upload image to cloudinary
        const result = await cloudinary.uploader.upload(req.file.path, { resource_type: "auto", public_id: ItNo, folder: folder });
        console.log(result)

        // Create new submission
        let submission = new Submission({
            name: req.body.name,
            avatar: result.secure_url,
            cloudinary_id: result.public_id,
            time: result.created_at
        });
        // Save submission
        await submission.save()
            .then(() => res.json(submission))
            .catch(err => res.status(400).json('Error: ' + err));
    } catch (err) {
        console.log(err);
    }
});

router.get("/", async (req, res) => {
    try {
        await Submission.find()
            .then((submission) => res.json(submission))
            .catch((err) => res.status(400).json(`Error:${err}`))
    } catch (err) {
        console.log(err);
    }
});

router.get("/:id", async (req, res) => {
    // Find submission by id
    try{
    let submissionID = req.params.id;
    await Submission.findById(submissionID)
        .then((data) => {
            res.status(200).send(data);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
    }catch (err) {
        console.log(err);
      }
});

router.put("/update/:id", upload.single("file"), async (req, res) => {
    console.log("first")
    let folder = "final report"
    try {
      let submission = await Submission.findById(req.params.id);
      // Delete file from cloudinary
      await cloudinary.uploader.destroy(submission.cloudinary_id);
      // Upload file to cloudinary
      let result;
      if (req.file) {
        result = await cloudinary.uploader.upload(req.file.path,{ resource_type: "auto", public_id: "InternPaper", folder: folder});
      }
      const data = {
        name: req.body.name || submission.name,
        avatar: result?.secure_url || submission.avatar,
        cloudinary_id: result?.public_id || submission.cloudinary_id,
        time:result?.created_at || submission.time
      };
      submission = await Submission.findByIdAndUpdate(req.params.id, data, { new: true });
      res.json(submission);
    } catch (err) {
      console.log(err);
    }
  });

module.exports = router;