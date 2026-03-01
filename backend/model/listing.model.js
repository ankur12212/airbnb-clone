import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    rent: {
      type: Number,
      required: true,
      min: 0,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    landmark: {
      type: String,
      trim: true,
      default: "",
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    image1: {
      type: String,
      required: true,
    },

    image2: {
      type: String,
      default: "",
    },

    image3: {
      type: String,
      default: "",
    },

    // 👇 VERY IMPORTANT for My Listings
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

// ✅ Improves performance for "My Listings"
listingSchema.index({ user: 1 });

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;