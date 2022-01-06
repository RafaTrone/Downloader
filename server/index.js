const express = require ('express');
const cors = require ('cors');
const ytdl = require ('ytdl-core');
const app = express();

app.listen (4000, () => {
    console.log ('O servidor funciona !!! Na porta 4000');
});

app.get('/ download', ( req, res ) => {
    var URL = req.query.URL;
    res.json ({url: URL});
})