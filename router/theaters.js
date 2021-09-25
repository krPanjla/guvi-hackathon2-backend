
const express=require("express")
const router=express.Router();
const services=require("../Services/theater")

router.get("/",services.get);

module.exports=router