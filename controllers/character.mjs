import express from 'express';
const router = express.Router();
import Character from '../models/character.mjs';
import db from '../db/conn.mjs';

//Starting with post route so I can see in my Db
router.post('/', async(req, res) => {
    // if (req.body.superPower === 'on') { //if checked, req.body is set to on
    //     req.body.superPower = true;
    // } else {                                 //if not check it is undefinied 
    //     req.body.superPower = false;
    // }
    try {
        const createdCharacter = awaitCharacter = await Character.create(req.body);
        res.status(200).send(createdCharacter);
    } catch (err) {
        res.status(400).send(err);
    }
})

export default router;




