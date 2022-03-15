import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30
    },
    about: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30
    },
    avatar: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
            },
            message: props => `${props.value} is not a valid URL address!`
        }
    }
});

export default mongoose.model('user', userSchema);