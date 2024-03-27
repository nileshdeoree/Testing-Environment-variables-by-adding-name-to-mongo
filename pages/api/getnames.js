import Name from "../../models/Name"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {

    let names = await Name.remove()
    res.json(names)
}

export default connectDb(handler);