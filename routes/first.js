const express = require('express');
const { modelName } = require('../models/User');
const router = express();

router.get('/', (req, res) =>{
    res.send('hello')
})

module.exports = router;