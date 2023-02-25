const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        text: {
            type: String,
            required: true
        },
        thinker: {
            type: Schema.Types.ObjectId,
            ref: 'user',
        },
        reactions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought'
            },
            {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        ],
    },
    {
        toJSON: {
            virtuals: true
        },
    }
);

const Thought = model('thoughts', thoughtSchema);

thoughtSchema.virtual('numOfReacts').get(function () {
    return this.reactions.length;
});

module.exports = Thought;