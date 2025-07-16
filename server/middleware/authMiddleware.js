import jwt from "jsonwebtoken";
import Company from "../models/Company.js";

export const protectCompany = async (req, res, next) => {
    const token = req.headers.token

    if (!token) {
        return res.json({
            success: false,
            message: 'Not authorised, Login Again'
        })
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log("Decoded token:", decoded)
        req.company = await Company.findById(decoded.id).select('-password')
        console.log("Company from token:", req.company)
        next()

    } catch (error) {

        res.json({success:false, message: error.messsage })
    }
}