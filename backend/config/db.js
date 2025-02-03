import mongoose from 'mongoose'
import dotenv from 'dotenv';

dotenv.config();  

export const connectDB = async () => {
     mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log('Db Connected Succesfully'))
    .catch((err) => console.log('Db Connection Error'));

}


