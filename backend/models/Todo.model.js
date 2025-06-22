import mongoose, { Schema } from "mongoose";

const todosSchema= new Schema({
    todo:{
        type:String,
        required:true,
    },
    completed:{
        type: Boolean,
        default:false
    }
},{
    timestamps:true
})

const Todos=mongoose.model("Todos",todosSchema);

export default Todos