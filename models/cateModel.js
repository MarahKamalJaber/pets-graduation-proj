const mongoose = require("mongoose");

const cateSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    categoryId: {
      type: Number,
      unique: true,
      default: 1,
    },
  },
  
  { timestamps: true } //to include createdAt and updatedAt
);

module.exports = mongoose.model("Category", cateSchema);
