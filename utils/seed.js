const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getUsers, getTexts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});

    const userThoughts = [];
    
    let users = getUsers();
    let thoughts = getTexts();

    for(let i = 0; i < 4; i++){
        
        const newThought = await Thought.create({ ...thoughts[i], thinker: users[i].userName });

        userThoughts.push({
            ...users[i],
            thoughts: [newThought._id]
        });
    }

    await User.insertMany(userThoughts);

    console.table(userThoughts);
    process.exit(0);
})