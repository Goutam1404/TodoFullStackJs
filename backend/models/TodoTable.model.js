import mongoose, { Schema } from "mongoose";
import Todos from "./Todo.model"

const todoTableSchema= new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    todo:[Todos]
    
},{
    timestamps:true
})

const TodoTable = mongoose.model("TodoTable", todoTableSchema);

export default TodoTable