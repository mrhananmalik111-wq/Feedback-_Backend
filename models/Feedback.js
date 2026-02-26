const {Schema,model} = require("mongoose")
const FeedbackSchema = new Schema ({
  Name :{
    type:String,
    required:true
  },
   Message :{
    type:String,
    required:true
  }
})
const Feedback = model('Feedback', FeedbackSchema)

module.exports=Feedback;
 