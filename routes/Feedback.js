const express = require("express")
const router = express.Router();
const  {Feedback_Controller,Get_Feedback,Delete_Feedback} =require("../controllers/Feedback")

router.post(`/`,Feedback_Controller);
router.get("/Get",Get_Feedback);
router.delete("/:id", Delete_Feedback);

module.exports=router;