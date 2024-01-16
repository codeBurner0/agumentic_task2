import express,{Request,Response} from 'express'
const app:express.Application=express()
import router from './src/routes/apiRoutes'
const host:string="127.0.0.1"
const PORT:number=5000

app.use('/v1',router)
app.get('/',(req:Request,res:Response)=>{
    res.status(200).send("hello world")
})

app.listen(PORT,host,()=>{
    console.log("server is starter at https//localhost:5000")
})