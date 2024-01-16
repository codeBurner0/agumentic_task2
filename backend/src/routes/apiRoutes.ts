import express,{Response,Request} from 'express'
import  cors from 'cors';
const router:express.Router=express.Router();
import '../db/connect'
import EmployeeModel from '../db/model/employee'
import nodemailer from 'nodemailer'
import bcrypt from 'bcrypt'
router.use(express.json());
router.use(cors());
router.get('/',(req:Request,res:Response)=>{
        res.status(200).send("Hello world");
})


const transporter=nodemailer.createTransport({
    service:'Gmail',
    auth: {
        user:'codeburner0@gmail.com',
        pass:'stdoftuycgumxcbj'
    },
})

router.post('/register', async (req: Request, res: Response) => {
    try {
      const { password, confirmPassword, email } = req.body;
  
      if (password !== confirmPassword) {
        return res.status(400).json({ message: "Password and confirm password don't match" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const existingUser = await EmployeeModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Email is already registered' });
      }
  
      const newUser = new EmployeeModel({ ...req.body, password: hashedPassword });
      const result = await newUser.save();
  
      const mailOptions = {
        from: 'support@agumentic.in',
        to: email,
        subject: 'Thanks for Registering',
        html: '<h1>Welcome to our Employee management system<h1/>',
      };
  
      await transporter.sendMail(mailOptions);
  
      res.status(201).json({ message: 'User registered successfully', result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });


router.post('login',(req:Request,res:Response)=>{
    try{
         if(req.body.email && req.body.password){
            const email=req.body.email;
            let result = EmployeeModel.findOne({email})
            if(result){
                res.status(201).send(result);
            }else{
                res.json({mess:"creadential are not matching"});
            }
         }else{
            res.status(400).json({mess:"email and password both are required"});
         }
    }catch(err){
        res.json({mess:"something went wrong"})
    }
})

export default router;