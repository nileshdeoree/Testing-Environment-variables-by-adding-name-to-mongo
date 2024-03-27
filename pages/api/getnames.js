import Name from "../../models/Name"
import connectDb from "../../middleware/mongoose"

const handler = async (req, res) => {

    let names = await Name.findById('6603ef81b650f49402051db0')
    res.json(names)
}

export default connectDb(handler);