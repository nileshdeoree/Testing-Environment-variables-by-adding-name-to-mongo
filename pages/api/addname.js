
import Name from "../../models/Name"
import connectDb from "../../middleware/mongoose"

const handler = async(req,res) =>{
    if(req.method === 'POST'){
        let firstObject = req.body[0]
        let {name} = firstObject
        console.log(name);

        try {
            const newName = new Name({ name });
            await newName.save();
            res.status(201).json({ message: 'Name stored successfully', name: newName });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    else{
        res.status(400).json({error: "This method is not allowed "})
    }
}

export default connectDb(handler)