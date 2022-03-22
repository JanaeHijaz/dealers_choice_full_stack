const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/dealers_choice_full_stack', { logging: false});

const Album = sequelize.define('album', {
    albumName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {notEmpty: true}
    },
    monthReleased: {
        type: Sequelize.STRING,
        defaultValue: "Sometime in 1989",
        allowNull: false,
        validate: {notEmpty: true}
    },
    genre: {
        type: Sequelize.STRING,
        defaultValue: "Some Genre",
        allowNull: false,
        validate: {notEmpty: true}
    },
    artistName: {
        type: Sequelize.STRING,
        defaultValue: "An Amazing Artist",
        allowNull: false,
        validate: {notEmpty: true}
    },
    artworkUrl: {
        type: Sequelize.STRING,
        defaultValue: "defaultimage.png"
    },
    listened: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        validate: {notEmpty: true}
    }
});


const syncAndSeed = async () => {
    await sequelize.sync({ force: true });
    await Album.create({albumName: "Rhythm Nation 1814", monthReleased: "September 1989", genre: "Pop", artistName: "Janet Jackson", artworkUrl: "janetjackson.jpg", listened: false}); // its ok
    await Album.create({albumName: "Batman", monthReleased: "June 1989", genre: "Rock", artistName: "Prince", artworkUrl: "prince.jpg", listened: false}); // its ok
    await Album.create({albumName: "3 Feet High and Rising", monthReleased: "March 1989", genre: "Hip Hop", artistName: "De La Soul", artworkUrl: "delasoul2.jpg", listened: false}); 
    await Album.create({albumName: "Diamond Life", monthReleased: "April 1989", genre: "Soul/Jazz", artistName: "Sade", artworkUrl: "sade.jpg", listened: false}); 
    await Album.create({albumName: "Amandla", monthReleased: "May 1989", genre: "Jazz", artistName: "Miles Davis", artworkUrl: "milesdavis2.jpg", listened: false}); 
    await Album.create({albumName: "Another Place and Time", monthReleased: "March 1989", genre: "Disco", artistName: "Donna Summer", artworkUrl: "donnasummer.jpg", listened: false}); 
    await Album.create({albumName: "Bulletproof Heart", monthReleased: "July 1989", genre: "New Wave", artistName: "Grace Jones", artworkUrl: "gracejones.jpg", listened: false});
    await Album.create({albumName: "Crossroads", monthReleased: "October 1989", genre: "Blues Rock", artistName: "Tracy Chapman", artworkUrl: "tracychapman.jpg", listened: false});
    await Album.create({albumName: "All Hail the Queen", monthReleased: "November 1989", genre: "Hip-Hop", artistName: "Queen Latifah", artworkUrl: "queenlatifah2.jpg", listened: false}) 
    await Album.create({albumName: "Paul's Boutique", monthReleased: "July 1989", genre: "Hip-Hop", artistName: "Beastie Boys", artworkUrl: "beastieboys2.jpg", listened: false}) 
    await Album.create({albumName: "Bleach", monthReleased: "June 1989", genre: "Rock", artistName: "Nirvana", artworkUrl: "nirvana2.jpg", listened: false}) 
    await Album.create({albumName: "Let Love Rule", monthReleased: "September 1989", genre: "Rock", artistName: "Lenny Kravitz", artworkUrl: "lennykravitz2.jpg", listened: false}) 
    await Album.create({albumName: "Club Classics Vol. One", monthReleased: "April 1989", genre: "British Soul", artistName: "Soul II Soul ", artworkUrl: "soul2soul.jpg", listened: false})
}

module.exports = {
    Album,
    syncAndSeed
}