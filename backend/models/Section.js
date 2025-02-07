const mongoose = require("mongoose");

const subSectionSchema = new mongoose.Schema({
  subSectionName: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["text", "image"],
    required: true,
  },
  content: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });


const sectionSchema = new mongoose.Schema({
  sectionName: {
    type: String,
    required: true,
  },
  subSections: [subSectionSchema],
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

const pageSchema = new mongoose.Schema({
  pageName: {
    type: String,
    unique: true,
    required: true,
    index: true,
  },
  sections: [sectionSchema],
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

pageSchema.index({ pageName: 'text', 'sections.sectionName': 'text', 'sections.subSections.subSectionName': 'text' });

module.exports = mongoose.model("Page", pageSchema);