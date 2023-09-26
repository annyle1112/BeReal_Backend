const express = require('express');
const webpush = require('web-push');
const router = express.Router();

const publicVapidKey = 'BHCDai8rcELsAMFznPtRB5AetBVlBR4craitzcubu39U2mYoTndGZ3JfHX6BlvxFdIO9KxF6tfOpRNWUhswqHuo';
const privateVapidKey = '8OSFplXd2jHPG2ZFrVktk_6OyZhIyKviuL6qTEdgW_4';

router.post('/', async(req, res) => {
    const subscription = req.body;
    console.log('subscription', subscription); //Konsolenausgabe
    res.status(201).json({ message: 'subscription received'});

    webpush.setVapidDetails('mailto:freiheit@htw-berlin.de', publicVapidKey, privateVapidKey);
});

module.exports = router;
