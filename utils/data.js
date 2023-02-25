const firstNames = [
    'Logan',
    'Sarah',
    'Josh',
    'Joey',
];

const lastNames = [
    'Peterson',
    'Hoogendoorn',
    'Jones',
    'Sallsman',
]

const emails = [
    'logandevsc0de@mail.com',
    'ShooG43@mail.com',
    'JonesJ36@mail.com',
    'SalPal21@mail.com',
]

const userNames = [
    'logandevsc0de',
    'ShooG43',
    'JonesJ36',
    'SalPal21',
]

const passwords = [
    'youKnowItBrah',
    'thisIsSecur3',
    'password321',
    'pasword123'
]

const texts = [
    'This is a test thought.',
    'Does this really work?',
    'This place seems cool.',
    'My first post...'
]

const getUsers = () => {
    return firstNames.map((firstName, index) => ({
        firstName,
        lastName: lastNames[index],
        email: emails[index],
        userName: userNames[index],
        password: passwords[index]
    }));
}

const getTexts = () => {
    return texts.map((text) => {
        text
    });
}
