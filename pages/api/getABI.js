
export default function handler(req, res) {
    // get ABI from Etherscan API call
    
    const { constractAddress } = req.body;


    res.status(200).json({ name: "John Doe" })
}