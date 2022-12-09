const fs=require("fs")
const mongoose=require("mongoose")
const colors=require("colors")
const dotenv=require("dotenv")


//Load Env Vars
dotenv.config({path:'./config/config.env'})

const Company=require("./models/Company")
const TCS=require("./models/TCS")
const Infosys=require("./models/Infosys")
const IBM=require("./models/IBM")
const Resource=require("./models/Resource")
const Ec2=require("./models/Ec2")
const S3=require("./models/S3")
const User=require("./models/CompanyUser")
const CompanyUser = require("./models/CompanyUser")


//connect To Db
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser:true,
    // useFindAndModify:false
})

const companies=JSON.parse(fs.readFileSync(`${__dirname}/_data/companies.json`),'utf-8')
const resources=JSON.parse(fs.readFileSync(`${__dirname}/_data/resources.json`),'utf-8')
const tcs=JSON.parse(fs.readFileSync(`${__dirname}/_data/tcs.json`),'utf-8')
const infosys=JSON.parse(fs.readFileSync(`${__dirname}/_data/infosys.json`),'utf-8')
const ibm=JSON.parse(fs.readFileSync(`${__dirname}/_data/ibm.json`),'utf-8')
const ec2=JSON.parse(fs.readFileSync(`${__dirname}/_data/ec2.json`),'utf-8')
const s3=JSON.parse(fs.readFileSync(`${__dirname}/_data/s3.json`),'utf-8')
const user=JSON.parse(fs.readFileSync(`${__dirname}/_data/users.json`),'utf-8')

//Import data into DB
const importData=async()=>{
    try {
        await Company.create(companies)
        await Resource.create(resources)
        await TCS.create(tcs)
        await Infosys.create(infosys)
        await IBM.create(ibm)
        await Ec2.create(ec2)
        await S3.create(s3)
        await CompanyUser.create(user)
        console.log("Data Imported".green.inverse)
        process.exit()
    } catch (error) {
        console.log(error)
    }
}

// Delete data from DB
const deleteData=async()=>{
    try {
        await Company.deleteMany()
        await Resource.deleteMany()
        await TCS.deleteMany()
        await Infosys.deleteMany()
        await IBM.deleteMany()
        await Ec2.deleteMany()
        await S3.deleteMany()
        await CompanyUser.deleteMany()
        console.log("Data Deleted....".red.inverse)
        process.exit()
    } catch (error) {
        console.log(error)
    }
}

if(process.argv[2]==='-i'){
    importData()
}
else if(process.argv[2]=='-d'){
    deleteData()
}
