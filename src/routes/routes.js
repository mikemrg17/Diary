const express = require('express');
const router = express.Router();
const User = require('../models/user');

//GET - Find users
router.get('/', async (req, res)=>{
    const users = await User.find();
    console.log(users);;
    res.json(users);
});

//POST - Insert user
router.post('/addUser', async(req, res)=>{
    const newUser = new User(req.body);
    await newUser.save();
    res.json({
        status: "New user added"
    });
});

//PUT - Update user
router.put('/updateUser/:id', async(req, res)=>{
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: "User updated"
    });
});

//DELETE - Drop user
router.delete('/dropUser/:id', async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.json({
        status: "User deleted"
    });
});

module.exports = router;

