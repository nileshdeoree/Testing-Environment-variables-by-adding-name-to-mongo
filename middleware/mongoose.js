import mongoose from "mongoose";

const connectDb = handler => async (req, res)=>{
    if(mongoose.connections[0].readyState){
        return handler (req, res)
    }
    await mongoose.connect("mongodb+srv://nileshdeore:1250@cluster0.qogyo0p.mongodb.net/codeswearyoutube?retryWrites=true&w=majority&appName=Cluster0")
    return handler(req, res);
}

export default connectDb;