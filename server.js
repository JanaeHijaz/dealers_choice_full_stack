const { Album, syncAndSeed } = require('./db/index');
const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// GET API Route to view all albums
app.get('/api/albums', async(req, res, next) => {
    try{
        const albums = await Album.findAll();
        res.send(albums)
    }
    catch(error){
        next(error)
    } 
});

// GET API Route to view individual albums
app.get('/api/albums/:id', async(req, res, next) => {
    try{
        const album = await Album.findByPk(req.params.id);
        res.send(album);
    }
    catch(error){
        next(error)
    }
});

// DELETE API Route to delete an album
app.delete('/api/albums/:id', async(req, res, next) => {
    try {
        const album = await Album.findByPk(req.params.id);
        await album.destroy();
        res.sendStatus(204)
    }
    catch(error){
        next(error)
    }
});

// PUT API Route to toggle/modify an album (if listened to)
app.put('/api/albums/:id', async(req, res, next) => {
    try{
        const album = await Album.findByPk(req.params.id);
        await album.update(req.body);
        res.send(album);
    }
    catch(error){
        next(error)
    }
});

// POST API Route to add/create a new album in the form 
app.post('/api/albums', async (req, res, next) => {
    try {
        res.send(await Album.create({albumName: req.body.newAlbum})) // may need to modify this! {albumName: req.body.name} or something
    }
    catch(error){
        next(error)
    }
});


const init = async () => {
    await syncAndSeed();
    const port = process.env.PORT || 5050;
    app.listen(port, () => console.log(`listening on port ${port}`));
}

init();