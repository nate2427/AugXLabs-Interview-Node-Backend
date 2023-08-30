const Image = require("../models/Image");
const multerSetup = require("../utils/multerSetup");

exports.uploadImage = async (req, res) => {
  const newImage = new Image({
    title: req.body.title,
    path: req.file.path,
  });
  await newImage.save();
  res.json({ message: "Image uploaded successfully", image: newImage });
};

exports.likeImage = async (req, res) => {
  const image = await Image.findById(req.params.id);
  if (!image) return res.status(404).json({ message: "Image not found" });

  image.liked = req.body.liked;
  await image.save();
  res.json({ message: "Image liked", likes: image.likes });
};

exports.updateImageTitle = async (req, res) => {
  const image = await Image.findById(req.params.id);
  if (!image) return res.status(404).json({ message: "Image not found" });

  image.title = req.body.title;
  await image.save();
  res.json({ message: "Title updated", image: image });
};

exports.getAllImages = async (req, res) => {
  const images = await Image.find();
  res.json(images);
};
