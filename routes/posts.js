const express = require('express');
const router = express();
const User = require('../models/User');

router.post('/post', async (req, res) =>{
    const user = new User(
        {
            title: req.body.title,
            description: req.body.description,
            price : req.body.price
        }
    )
    try {
        const savedPost = await user.save();
        res.send(savedPost)
    } catch (error) {
        res.status(400).send(error)
    }
    return res.status(200).json();
})
router.get('/retrive:id', async (req, res)=>{
    try {
        const post = await User.findById(req.params.id);
        res.status(200).send(post)
    } catch (error) {
        return res.status(401).json()
    }
})


module.exports = router;