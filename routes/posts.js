const express = require('express');
const router = express();
const stripe = require('stripe')(process.env.STRIPE_KEY)
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
router.get('/payment', async (req, res)=>{
    
})


module.exports = router;