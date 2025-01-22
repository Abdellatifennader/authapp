import mongoose from "mongoose";

let initialized = false;

export const connect = async () =>{

    mongoose.set('strictQuery',true);
    if(initialized){
        console.log('MongoDB already connected');
        return;

    }
    try{
        await mongoose.connect(process.env.MOGODB_URI,{
            dbName:"next auth app",
            useNewUrlParser:true,
            useUnifieldTopology:true,
        })
        console.log('MongoDB connected');
        initialized=true;
    }catch(error){

        console.log(error);
    }
}