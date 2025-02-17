import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv';
import foodRouter from './routes/foodRoute.js'
import { addFood } from './controllers/foodController.js'
import userRouter from './routes/userRoute.js'
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js'
import bcrypt from 'bcryptjs';
//app config 

const app = express()
const port = process.env.PORT || 4000

// middleware 
dotenv.config();

app.use(express.json())
app.use(cors({ origin: 'https://fooddel-frontend-50kw.onrender.com/' }))

// DB Connection 
connectDB();


app.get('/', (req,res) => {
    res.send('API IS WORKING FINE')
})

app.get('/all',(req,res) => {
    res.send('Hi Naga sai Kumar')
})
//api endpoints 

app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads'));
app.use('/api/user', userRouter);
app.use("/api/cart", cartRouter);


app.listen(port, () => {
    console.log('Sever Running on http://localhost:4000');
})

