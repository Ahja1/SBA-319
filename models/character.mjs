import mongoose, { mongo } from 'mongoose';

const characterSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true 
    },
    color: {
    type: String,
    required: true
},
superPower: Boolean
});

const Character = mongoose.model('Character', characterSchema);

export default Character;