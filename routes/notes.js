const router = require('express').Router();
const fs = require('fs');
const path = require('path');

router.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        const parsedData = JSON.parse(data);
        res.json(parsedData);
    });

});

module.exports = router;