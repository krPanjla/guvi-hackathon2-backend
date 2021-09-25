const mongo=require("../Database/mongo")
const {ObjectId}=require("mongodb")

const services={
    async get(req,res){
        const data=await mongo.theater.findOne();
        console.log(data)
        res.send(data)
    }
}
module.exports=services