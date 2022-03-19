const { Album, syncAndSeed } = require('./index.js');
const express = require('express');
const app = express();
const path = require('path');

app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/api/albums', async(req, res, next) => {
    try{
        const albums = await Album.findAll();
        res.send(albums)
    }
    catch(error){
        next(error)
    } 
})

const init = async () => {
    await syncAndSeed();
    const port = process.env.PORT || 5050;
    app.listen(port, () => console.log(`listening on port ${port}`));
}

init();