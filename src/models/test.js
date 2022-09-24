const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const testModel = mongoose.model("test", testSchema);
module.exports = testModel;
