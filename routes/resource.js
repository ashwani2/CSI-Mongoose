const express = require("express");
const {
  getDetails
} = require("../controllers/resource");
const { protect, authorize } = require("../middleware/auth");

const router = express.Router();

router.route("/getDetails/:id").get(protect,authorize('admin'),getDetails);


module.exports = router;
