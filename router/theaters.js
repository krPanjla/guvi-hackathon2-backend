
const express=require("express")
const router=express.Router();
const services=require("../Services/theater")

router.get("/",services.get);
router.get("/:id",services.getOne);
router.post("/",services.addTheater);
router.put("/:id",services.editTheater);
router.delete("/:id",services.deleteTheater);

module.exports=router