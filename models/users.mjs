import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /^\S+@\S+\.\S+$/,
    },
});

// Define validation messages
userSchema.path('username').validate(function(value) {
    return value !== 'admin';
}, 'Username cannot be "admin"');

const User = mongoose.model('User', userSchema);

export default User;
