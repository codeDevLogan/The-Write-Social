const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getUsers, getTexts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});

    const users = [];
    const thoughts = [];

    for(let i = 0; i < 4; i++){
        users.push()
    }
})