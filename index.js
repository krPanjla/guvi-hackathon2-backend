const express=require("express");
const mongo =require("./Database/mongo");
const theaterRouter=require("./router/theaters")
const cors= require("cors")

const app=express();

async function loadApp(){

    try {
        await mongo.connect();
    app.use(express.json());
    app.use(cors());
    app.use("/theaters",theaterRouter)
    app.listen(3001,()=>{console.log("Server started")})
    } catch (error) {
        console.log(error)
    }
    
}
loadApp();