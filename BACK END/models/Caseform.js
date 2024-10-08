const mongoose = require('mongoose');

const CaseformSchema = new mongoose.Schema(
  {
    img: {
      type: String, // Consider using a String for image URL or file path
      required: true, // If optional, remove this or set to `false`
    },
    name: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String, // You may want to store this as a Date type
    },
    address: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: Number, // Can make this required if necessary
    },
    smoke: {
      type: Boolean,
      default: false,
    },
    drink: {
      type: Boolean,
      default: false,
    },
    prenent: {
      type: Boolean,
      default: false,
    },
    bloodPressure: {
      type: Boolean,
      default: false,
    },
    medicins: {
      type: Boolean,
      default: false,
    },
    contagiousDiseases: {
      type: Boolean,
      default: false,
    },
    psychologicalDisorder: {
      type: Boolean,
      default: false,
    },
    physicalInjury: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Caseform', CaseformSchema);
