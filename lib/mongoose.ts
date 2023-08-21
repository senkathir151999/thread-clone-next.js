import mongoose from "mongoose";

let isConnected =false;


export const connectToDB  =async () => {
    mongoose.set("strictQuery",true);
    if(!process.env.MONGODB_URL) return console.log("not found")
    if(isConnected) return;
    try{
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
    }catch(err){
        console.log(err);
    }
}