import mongoose from 'mongoose';

const CharacterSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: True 
    },
    color: {
    type: String,
    required: true
},
superPower: Boolean
});

const Fruit = mongoose.model('Character', CharacterSchema);

export default Character;