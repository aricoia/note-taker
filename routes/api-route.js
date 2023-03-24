const { readAndAppend, readFromFile } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

module.exports = function(app) {
    app.get('/api/notes', function(req, res) {
        readFromFile('./db/db.json').then((data) =>
            res.json(JSON.parse(data))
        );
    });

    app.post('/api/notes', function(req, res) {
        const payload = {
            title: req.body.title,
            id: uuidv4(),
            text: req.body.text,
        };
        readAndAppend(payload, './db/db.json');
        res.json(`Note added`);

    });

    
}