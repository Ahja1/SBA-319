import express from 'express';
const router = express.Router();
import Character from '../models/character.mjs';
import db from '../db/conn.mjs';

// seed route
router.get("/seed", async (req, res) => {
    console.log('in seed');
    try {
        await Character.create([
            {
                name: 'starfire',
                color: "pink",
                superPower: true
            }, 
            {
                name: 'raven',
                color: 'purple',
                superPower: true
            }, 
            {
                name: 'robin',
                color: 'orange',
                superPower: false
            }
        ])
        res.status(200).redirect('/characters');
    } catch (err) {
        res.status(400).send(err);
    }
});

    
        ///////////////////////////////////////////////
        
router.get('/', async (req, res) => {
    try {
        const foundCharacter = await Character.find({});
        res.status(200).render('characters/Index', { characters: foundCharacters})
    } catch (err) {
        res.status(400).send(err);
    }
})

// N - New - allows a user to input a new character
router.get('/new', (req, res) => {
    res.render('characters/New');
})

/// - Delete-permanantly 
router.delete('/:id', async(req, res) => {
    try{
        const deletedCharacter = await Character.findByIdAndDelete(req.params.id);
        console.log(deletedCharacter);
        res.status(200).redirect('/characters');
        } catch (err) {
            res.status(400).send(err);
        }
})

// U - UPDATE
router.put('/:id', async (req, res) => {
    if (req.body.superPower === 'on') {
        req.body.superPower = true;
    } else {
        req.body.superPower = false;
    }

    try {
        const updatedCharacter = await Character.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true },
        );
            console.log(updatedCharacter);
        res.redirect(`/characters/${req.params.id}`);
    } catch (err) {
        res.status(400).send(err);
    }
})


//Starting with post route so I can see in my Db
router.post('/', async(req, res) => {
     if (req.body.superPower === 'on') { //if checked, req.body is set to on
         req.body.superPower = true;
     } else {                                 //if not check it is undefinied 
         req.body.superPower = false;
     }
    console.log(req.body)

    try {
        const createdCharacter = await Character.create(req.body);
        res.status(200).redirect('/characters');
    } catch (err) {
        res.status(400).send(err);
    }
})

// C create
router.get('/:id', async (req, res) => {
    try {
        const foundCharacter = await Character.findById(req.params.id);
        res.render('characterss/Show', {character: foundCharacter});
    } catch (err) {
        res.status(400).send(err);
    }
})

// E - EDIT - update an existing entry in the database
router.get("/:id/edit", async (req, res) => {
    try {
        const foundCharacter = await Character.findById(req.params.id);
        res.status(200).render('characters/Edit', {character: foundCharacter});
    } catch (err) {
        res.status(400).send(err);
    }
})


// S - SHOW - show route displays details of an individual character
router.get('/:id', async (req, res) => {
    try {
        const foundCharacter = await Character.findById(req.params.id);
        res.render('characters/Show', {character: foundCharacter});
    } catch (err) {
        res.status(400).send(err);
    }
})


export default router;




