const Feedback_Model = require("../models/Feedback")
async function Feedback_Controller(req, res) {
    try {
         const { Name, Message } = req.body; 
        const Data = await Feedback_Model.create({Name , Message});
        res.json({
            message: "Feedback Addes successfully",
            data: Data
        });
    } catch (e) {
        console.log(e.message)
        res.json({ Error: e.message })
    }
}


async function Get_Feedback(req,res) {
    try {
         const allUser = await Feedback_Model.find();
         res.status(200).json(allUser)
    } catch (e) {
        res.status(500).json({error:e.message})
    }
}




async function Delete_Feedback(req,res) {
    try {
        const id = req.params.id
        await Feedback_Model.findByIdAndDelete(id)
         res.status(200).json({ success: true })
    } catch (err) {
        res.status(500).json({
            error:err.message
        })
    }
}

module.exports={Feedback_Controller,Get_Feedback,Delete_Feedback}



