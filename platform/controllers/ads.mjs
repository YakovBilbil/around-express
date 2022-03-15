const Ad = require('../models/ad');

module.exports.createAd = (req, res) => {
    const { title, text, creatorId } = req.body;
    Ad.create({ title, text, creator: creatorId })
        .then(ad => res.send({ data: ad }));
};


module.exports.getAds = (req, res) => {
    Ad.find({})
        .populate(['creator', 'followers'])
        .then(ad => res.send({ data: ad }));
};