const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getUsers, getTexts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});

    let users = await User.insertMany(getUsers());
    let thoughts = await Thought.insertMany(getTexts());

    for(let i = 0; i < 4; i++){
        thoughts[i].thinker = users[i]._id;
        await thoughts[i].save();
    }
    console.table(users);
    console.table(thoughts);

})