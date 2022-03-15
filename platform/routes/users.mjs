/*
    code for creating routers, etc.
*/
/*
const User = require('../models/user');

router.post('/', (req, res) => {
    const { name, about } = req.body;

    User.create({ name, about })
        // returns the recorded data
        .then(user => res.send({ data: user }))
        // data not recorded, prompting an error
        .catch(err => res.status(500).send({ message: 'Error' }));
});

router.get('/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => res.send({ data: user }))
        .catch(err => res.status(500).send({ message: 'Error' }));

    // find the first match with a field that equals "Elise Taylor"
    User.findOne({ name: 'Elise Taylor' });

    // find all 30-year-old users
    User.find({ age: 30 });

    // find all users
    User.find({});
});

router.patch('/:id', (req, res) => {
    // updating the name of the user found by _id
    User.findByIdAndUpdate(req.params.id, { name: 'Henry George' },
            // pass the options object:
            {
                new: true, // the then handler receives the updated entry as input
                runValidators: true, // the data will be validated before the update
                upsert: true // if the user entry wasn't found, it will be created
            })
        .then(user => res.send({ data: user }))
        .catch(err => res.status(500).send({ message: 'Error' }));

    // find the first match with the name field that equals to "Sam Taylor" and replace is with "Henry George"
    User.findOneAndUpdate({ name: 'Sam Taylor' }, { name: 'Henry George' });

    // find all matches with the name field that equals to "Sam Taylor" and replace it with "Henry George"
    User.updateMany({ name: 'Sam Taylor' }, { name: 'Henry George' });

    // delete a user with a specific name
    User.findOneAndRemove({ name: 'Sam Taylor' });

    // delete all 30-year-old users
    User.deleteMany({ age: 30 });
});
*/

const { getUser, createUser } = require('../controllers/users');

// route definitions
router.get('/:id', getUser)
router.post('/', createUser);

module.exports = router;