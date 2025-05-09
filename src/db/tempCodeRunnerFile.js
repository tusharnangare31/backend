import mongoose, { connect } from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`MongoDB Connected !! DB Host : ${connectionInstance}`)
        
    } catch (error) {
        console.log('MongoDB Connection ERROR',error);
        process.exit(1)
    }
}

export default connectDB