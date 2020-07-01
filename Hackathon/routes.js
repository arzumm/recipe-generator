//header
const express=require("express");
const postController=require("./post");
const router=express.Router();
////routers

//get the loading page
router.get("/",postController.getPosts);
//Example url to get data from db
router.get("/battery",postController.getbattery);
//Example for the ingridient 
router.get("/getrecipe-:ing1-:ing2",postController.getrecipe);
//export
module.exports=router;