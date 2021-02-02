const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: /^\w+([.-]?\w+)*(@codexjr.com.br)+$/
    },
    password: {
        type: String,
        required: true,
    },
    is_enable: {
        type: Boolean,
        required: false,
        default: false
    },
    code: {
        type: Number,
        required: false,
    },
    token_list: {
        type: [String]
    },
    id_fcm: {
        type: String,
        required: false,
        default: null
    }
},
    {
        timestamps: true,
    });

module.exports = model('User', UserSchema);