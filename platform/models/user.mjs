const mongoose = require('mongoose');


const petSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
    },
    age: Number,
    // add the creator field
    creator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
});


const userSchema = new mongoose.Schema({
    name: { // every user has a name field, the requirements for which are described below:
        type: String, // the name is a string
        required: true, // every user has a name, so it's a required field
        minlength: 2, // the minimum length of the name is 2 characters
        maxlength: 30, // the maximum length is 30 characters
    },
    pronouns: {
        type: String, // the pronouns are a string
        enum: ['they/them', 'she/her', 'he/him', 'other pronouns'] // every user can choose their pronouns
    },
    age: { // every user has an age field
        type: Number, // the age type is a number
        required: true, // the user has to specify their age
        validate: { // describe the validate feature
            validator(v) { // validator is a data validation feature. v is the age value
                return v >= 18; // if the age is less than 18, it will return false
            },
            message: 'Sorry. You have to be at least 18 years old', // when the validator returns false, this message will be displayed
        }
    },
    hobbies: [{ // describe the schema for a single element and put it in square brackets
        type: String,
        minlength: 2,
        maxlength: 30,
    }],
    about: String, // type: String
    pet: petSchema // describe the pet property with this schema
});

module.exports = mongoose.model('user', userSchema);