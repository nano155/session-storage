import  mongoose  from "mongoose";

const usersSchema =  new mongoose.Schema({
    first_name: {
        type:String,
        required: true
    },
    last_name:{
        type:String,
        required: true
    },
    email:{
        type: String,
        required:true,
        unique: true,
    },
    age:{
        type: Number,
        required:true,
        unique: true,
    },
    password: {
        type: String,
        required:true,
        unique: true,
    }
})

export const usersModel = mongoose.model('users', usersSchema)