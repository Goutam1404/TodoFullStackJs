import mongoose, { Schema } from "mongoose";

const notesSchema= new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String
    },
    completed:{
        type: Boolean
    }
},{
    timestamps:true
})

const Notes=mongoose.model("Notes",notesSchema);

export default Notes