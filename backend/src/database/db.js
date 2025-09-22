import mongoose from "mongoose";
async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
export default connectDB