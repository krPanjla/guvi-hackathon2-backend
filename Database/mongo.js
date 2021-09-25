const { MongoClient }=require("mongodb");
const client=new MongoClient("mongodb+srv://Kr_panjla:admin1234@cluster0.1dnd7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
const mongo={
    theater:null,
    async connect(){
        
        await client.connect()
        console.log(" Database connected sucessfully")
        this.theater= await client.db("ticketBooking").collection("theaters");
        } 
        
    }

module.exports=mongo;

