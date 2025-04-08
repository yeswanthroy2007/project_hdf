const mongoose=require('mongoose');
const signupSchema= new mongoose.Schema(
    {
        username: { 
            type: String, 
            required: [true, 'Username is required'], 
            unique: true, 
            trim: true, 
            minlength: [3, 'Username must be at least 3 characters'], 
            maxlength: [20, 'Username cannot exceed 20 characters'] 
        },
        email: { 
            type: String, 
            required: [true, 'Email is required'], 
            unique: true, 
            trim: true, 
            lowercase: true, 
            match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address']
        },
        password: { 
            type: String, 
            required: [true, 'Password is required'], 
            minlength: [6, 'Password must be at least 6 characters'] 
        }
    }, { timestamps: true });
const Signup=mongoose.model('Signup',signupSchema);
module.exports=Signup;