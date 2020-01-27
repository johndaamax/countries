const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const bcrypt = require('bcryptjs');

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    const errors = [];

    if(!email || email.trim().length===0){
        errors.push({email: 'Email field is empty'});
    }
    if(!password || password.trim().length===0){
        errors.push({password: 'Password field is empty'});
    }
    if(errors.length > 0)
        return res.status(400).json({errors});

    try{
        // See if a user already exists with that email 
        let user = await User.findOne({ email });
        if (user) {
            res.status(400).json({errors: [{message: 'User already exists.'}]})
        }   
        user = new User({
            email,
            password
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        return res.status(200).json({message: 'User registered successfully!'});
    } catch(err) {
        return res.status(400).json({errors: [{message: err.message}]})
    }
});

module.exports = router;