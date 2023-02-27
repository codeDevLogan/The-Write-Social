const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        firstName: {type: String, required: true },
        lastName: {type: String, required: true },
        email: {
            type: String,
            required: true,
            match: [
                /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/i,
                'Error: Please enter a valid email.'
            ],
        },
        userName: {type: String, required: true },
        password: {type: String, required: true },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'user',
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
    }
);

const User = model('users', userSchema);

userSchema.virtual('friendTotal').get(function () {
    return this.friends.length;
});

module.exports = User;