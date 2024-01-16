import mongoose from 'mongoose'
const employeeSchema=new mongoose.Schema({
    firstName:{
        type:String,
        require:true,
    },
    LastName:{
        type:String,
        require:true,
    },
    phone:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

const EmployeeModel=mongoose.model('employee',employeeSchema);
export default EmployeeModel;