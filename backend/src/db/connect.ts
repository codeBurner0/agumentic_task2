import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = 3000

mongoose
  .connect('mongodb+srv://codeburner0:1234@cluster0.nwrbsrv.mongodb.net/employee')

  .then(() => {
    console.log('connection is successful')
  })
  .catch((err) => {
    console.log('connection is not successfull')
  })
