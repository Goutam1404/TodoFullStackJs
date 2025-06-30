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
        
        const note=await Notes.create({ title, description})
        if (!note) {
          return res.status(400).json({
            success: false,
            message: "note not created",
          });
        }

        await note.save();
        return res.status(200).json({
            message:"Note created successfully",
            success: true,
        })
    } catch (error) {
        console.log(`Error in creating note:=> ${error}`);      
        res.status(500).json({
            message:"Failed to create a note",
            success: false,
        })
    }
}

const getNote=async(req,res)=>{
  const note = await Notes.findById(req.note.id);
  if(!note){
    return res.status(400).json({
      message:"can't found the note"
    })
  }
}


export {createNote, getNote};