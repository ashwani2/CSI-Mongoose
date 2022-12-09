
const EC2=require("../models/Ec2")
const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");


//@desc     Register a User
//@route    GET /api/v1/resource/details/:id
//@access   Private
exports.getDetails = asyncHandler(async (req, res, next) => {
 const ec2=await EC2.findOne({instance_id: req.params.id})

 const value=await ec2.matchCompId(ec2.company,req.user.company)

    if(value === false){
        return next(new ErrorResponse('You does not have proper access right to view the details of this instance id',400))
    }

    res.status(200).send({
        error:false,
        success:true,
        data:ec2
    })
});