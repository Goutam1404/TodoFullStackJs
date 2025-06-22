import Notes from "../models/Note.model";

const createNote=async(req,res)=>{
    try {
        const {title,description}=req.body;
        if(!title || !description){
            return res.status(400).json({
              success: false,
              message: "Some fields are missing",
            });
        }
        

    } catch (error) {
        
    }
}