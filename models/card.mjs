import mongoose from "mongoose";

const cardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 30,
    },
    link: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
            },
            message: props => `${props.value} is not a valid URL address!`
        },
    },
    owner: {
        type: String,
        required: true
    },
    likes: {
        type: Array,
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('card', cardSchema);