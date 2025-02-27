const mongoose = require('mongoose');

const faqSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('FAQ', faqSchema);
