const User = require('../models/user');

// the getUser request handler
module.exports.getUser = (req, res) => {
    User.findById(req.params.id)
        .then(user => res.send({ data: user }))
        .catch(err => res.status(500).send({ message: 'Error' }));
};

// the createUser request handler
module.exports.createUser = (req, res) => {
    const { name, about } = req.body;

    User.create({ name, about })
        .then(user => res.send({ data: user }))
        .catch(err => res.status(500).send({ message: 'Error' }));
};