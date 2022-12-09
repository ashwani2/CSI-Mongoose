const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const Ec2Schema = new mongoose.Schema({
  instance_id: {
    type: String,
    default: function genUUID() {
        return uuidv4()
    }
  },
  ip_addr: {
    type: String,
  },
  cost: {
    type: String,
  },
  Ram: {
    type: Number,
  },
  Capacity: {
    type: Number,
  },
  resource: {
    type: mongoose.Schema.ObjectId,
    ref: "Resource",
    required: true,
  },
  company: {
    type: mongoose.Schema.ObjectId,
    ref: "Company",
    required: true,
  },
});

Ec2Schema.methods.matchCompId = async function (resourceComp, userComp) {
  return resourceComp.equals(userComp);
};
module.exports = mongoose.model("EC2", Ec2Schema);
