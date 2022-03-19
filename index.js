const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/dealers_choice_full_stack', { logging: false });

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
        defaultValue: "Some Artist",
        allowNull: false,
        validate: {notEmpty: true}
    },
    removed: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false,
        validate: {notEmpty: true}
    }
});


const syncAndSeed = async () => {
    await sequelize.sync({ force: true });
    await Album.create({albumName: "Rhythm Nation 1814", monthReleased: "September 1989", genre: "Pop", artistName: "Janet Jackson", removed: false});
    await Album.create({albumName: "Batman", monthReleased: "June 1989", genre: "Rock", artistName: "Prince", removed: false});
    await Album.create({albumName: "3 Feet High and Rising", monthReleased: "March 1989", genre: "Hip Hop", artistName: "De La Soul", removed: false});
    await Album.create({albumName: "Diamond Life", monthReleased: "April 1989", genre: "Soul/Jazz", artistName: "Sade", removed: false});
    await Album.create({albumName: "Amandla", monthReleased: "May 1989", genre: "Jazz", artistName: "Miles Davis", removed: false});
    await Album.create({albumName: "Another Place and Time", monthReleased: "March 1989", genre: "Disco", artistName: "Donna Summer", removed: false});
    await Album.create({albumName: "Bulletproof Heart", monthReleased: "July 1989", genre: "New Wave", artistName: "Grace Jones", removed: false});
    await Album.create({albumName: "Crossroads", monthReleased: "October 1989", genre: "Blues Rock", artistName: "Tracey Chapman", removed: false});
    await Album.create({albumName: "All Hail the Queen", monthReleased: "November 1989", genre: "Hip-Hop", artistname: "Queen Latifah", removed: false})
}

module.exports = {
    Album,
    syncAndSeed
}