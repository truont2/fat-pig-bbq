const connection = require('../config/connection');

const {Warehouse, TennisRacket}  = require('../models');

connection.on('error', (err)  => console.log(err));

connection.once('open', async () => {
    console.log('connected and seeding');

    await Warehouse.deleteMany({});

    // drop any existing Thoughts
    await TennisRacket.deleteMany({});

    await TennisRacket.collection.insertMany(
        [
            {
            name: 'Babolat Pure Aero Plus', 
            gripSize: ['4 1/8', '4 1/4', '4 3/8', '4 1/2', '4 5/8'], 
            brand: 'Babolat', 
            weight: 11.3,
            balance: "6 pts HL", 
            length: 27.5,
            },
        ]
    )

    await Warehouse.collection.insertOne({
        name: "Amazon warehouse", 
        location: "Seattle, WA"
    })

    console.info('Seeding complete! 🌱')
    process.exit(0);
})