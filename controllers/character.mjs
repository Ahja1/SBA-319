import express from 'express';
const router = express.Router();

router.get("/seed", async (req, res) => {
    try {
        const characters = [
            {
                name: 'Robin',
                color: 'Red',
                superPower: true
            },
            {
                name: 'Cyborg',
                color: 'Blue',
                superPower: false
            },
            {
                name: 'Starfire',
                color: 'Orange',
                superPower: true
            },
            {
                name: 'Raven',
                color: 'Purple',
                superPower: true
            },
            {
                name: 'Beast Boy',
                color: 'Green',
                superPower: true
            },
        ];

        await Character.insertMany(characters);

        res.status(200).json({ message: 'Database seeded successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



// N - New - allows a user to input a new character
router.get('/new', (req, res) => {
    res.render('character/New');
})

// GET all characters
router.get('/characters', async (req, res) => {
    try {
        res.status(200).json({ message: 'Get all characters' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// POST a new post
router.post('/posts', async (req, res) => {
    try {
        const newPost = await Post.create(req.body);
        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// PUT/PATCH an existing post
router.put('/posts/:id', async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE a post
router.delete('/posts/:id', async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

export default router;
