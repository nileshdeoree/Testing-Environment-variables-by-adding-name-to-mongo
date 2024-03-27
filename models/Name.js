// getting-started.js
const mongoose = require('mongoose');

const NameSchema = new mongoose.Schema({
    name: {type: String, required: true},
    
  }, { timestamps: true});
  mongoose.models = {}
  export default mongoose.model("Name", NameSchema);