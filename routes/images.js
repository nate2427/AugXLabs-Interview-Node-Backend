const express = require("express");
const imageController = require("../controllers/imageController");
const multerSetup = require("../utils/multerSetup");

const router = express.Router();

router.post(
  "/upload",
  multerSetup.single("image"),
  imageController.uploadImage
);
router.post("/like/:id", imageController.likeImage);
router.put("/update/:id", imageController.updateImageTitle);
router.get("/", imageController.getAllImages);

module.exports = router;
