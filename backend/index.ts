import express,{Request,Response} from 'express'
import router from './src/routes/apiRoutes'
const app:express.Application=express()

const host:string="127.0.0.1"
const PORT:number=5000

app.use('/api',router)
app.get('/',(req:Request,res:Response)=>{
    res.status(200).send("hello world")
})

app.listen(PORT,host,()=>{
    console.log("server is starter at https//localhost:5000")
})