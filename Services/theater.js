const mongo=require("../Database/mongo")
const { ObjectId } = require("mongodb")

const services={
    async get(req,res){
        const data=await mongo.theater.find().toArray();
   
        res.send(data)
    },

    async addTheater(req,res){
       const add= await mongo.theater.insertOne(req.body)
        res.send(add)
        
    },
    async getOne(req,res){
        const data=await mongo.theater.findOne({_id: new ObjectId(req.params.id)});
        console.log(data)
        res.send(data)
    },

    
    async editTheater(req,res){
        console.log("in the updation method")
       const edit= await mongo.theater.updateOne({_id: new ObjectId(req.params.id)},{$set:{...req.body}})
        res.send(edit)
     
    },
    async deleteTheater(req,res){
        console.log(req.params.id)
       const del= await mongo.theater.deleteOne({_id: new ObjectId(req.params.id)})
        res.send(del)
        
    }
}
module.exports=services