import uploadOnCloudinary from "../config/cloudinary.js";
import Listing from "../model/listing.model.js";
import User from "../model/user.model.js";

export const addListing = async (req, res) => {
  try {
    const host = req.userId;

    const { title, description, rent, city, landMark, category } = req.body;

    const [img1, img2, img3] = await Promise.all([
      uploadOnCloudinary(req.files.image1[0].path),
      uploadOnCloudinary(req.files.image2[0].path),
      uploadOnCloudinary(req.files.image3[0].path),
    ]);

    const listing = await Listing.create({
      title,
      description,
      rent,
      city,
      landMark,
      category,
      image1: img1.secure_url,
      image2: img2.secure_url,
      image3: img3.secure_url,
      host,
    });

    const user = await User.findByIdAndUpdate(
      host,
      { $push: { listing: listing._id } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(201).json(listing);

  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getListing = async (req, res) => {
  try {
    const listing = await Listing.find().sort({ createdAt: -1 });
    res.status(200).json(listing);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};